"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { bannersQuery } from "@/sanity/lib/queries";

interface Banner {
  _id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt: string;
  };
}

export default function ImageSlider() {
  const [slides, setSlides] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const data = await client.fetch(bannersQuery);
        setSlides(data || []);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setSlides([]);
      } finally {
        setLoading(false);
      }
    }
    fetchBanners();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect(); // Set initial index
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  if (loading) {
    return (
      <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden mt-20 bg-gray-900 animate-pulse flex items-center justify-center">
        <div className="text-gray-400">Loading banners...</div>
      </div>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden mt-20">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-[#EAE59B]/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#EAE59B]/10 blur-3xl" />
      </div>
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => {
            const imageUrl = slide.image?.asset?.url
              ? urlFor(slide.image)?.auto("format").url()
              : null;

            return (
              <div
                key={slide._id}
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
              >
                <div className="relative w-full h-full">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={slide.image?.alt || slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      quality={90}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800" />
                  )}
                  {/* Overlay linear */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/35 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end justify-start lg:justify-center lg:items-center md:items-center ">
                    <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-0">
                      <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl text-left bg-black/25 border border-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                          >
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="text-white/80 text-xs md:text-sm font-medium tracking-[0.3em]"
                            >
                              {slide.subtitle}
                            </motion.p>

                            <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight md:tracking-wide relative drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
                            >
                              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#EAE59B] via-[#f6e7a8] to-[#F0D36B]">
                                {slide.title}
                              </span>
                            </motion.h1>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.7 }}
                              className="pt-2 flex flex-wrap items-center gap-4"
                            >
                              <Link href={slide.buttonLink}>
                                <motion.button
                                  whileHover={{ scale: 1.05, x: 5 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-flex items-center gap-2 bg-[#EAE59B] text-[#12203B] px-4 py-1.5 rounded-full font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase transition-all shadow-[0_8px_20px_rgba(234,229,155,0.35)] hover:shadow-[0_10px_28px_rgba(234,229,155,0.5)]"
                                >
                                  {slide.buttonText}
                                  <span className="text-base">→</span>
                                </motion.button>
                              </Link>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-xs sm:text-sm text-white/70"
                              >
                                <span className="inline-flex items-center gap-2">
                                  <span className="w-10 h-px bg-white/40" />
                                  Experience the Thunder
                                </span>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-black/40 to-transparent" />
      <div className="absolute inset-y-0 left-0 flex items-center px-4">
        <button
          onClick={scrollPrev}
          className="z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all backdrop-blur-md border border-white/15"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-4">
        <button
          onClick={scrollNext}
          className="z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all backdrop-blur-md border border-white/15"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-8 h-2 bg-[#EAE59B] shadow-[0_0_15px_rgba(234,229,155,0.6)]"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
