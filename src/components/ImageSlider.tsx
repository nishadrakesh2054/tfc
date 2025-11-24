"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "Welcome to Thunderbolts FC",
    subtitle: "Where Passion Meets Football",
    description:
      "Join us in celebrating the spirit, skill, and dedication that define our club.",
    buttonText: "Meet Our Players",
    buttonLink: "#players",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    title: "Epic Championship Moments",
    subtitle: "Reliving Our Greatest Victories",
    description:
      "Experience the unforgettable games and achievements that shaped our legacy.",
    buttonText: "Explore Gallery",
    buttonLink: "#gallery",
  },
  {
    id: 3,
    image: "/banner3.jpg",
    title: "Become Part of the Legacy",
    subtitle: "Join the Thunderbolts Family",
    description:
      "Connect with us, train, and grow with a community passionate about football.",
    buttonText: "Get in Touch",
    buttonLink: "#contact",
  },
];

export default function ImageSlider() {
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

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden mt-20">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">                  <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-0">
                    <div className="max-w-7xl mx-auto">
                      <div className="max-w-3xl text-left">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="space-y-3"
                        >
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-white text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-2"
                          >
                            {slide.subtitle}
                          </motion.p>

                  
                          <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight md:tracking-wide relative"
                          >
                            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#EAE59B] to-[#F0D36B]">
                              {slide.title}
                            </span>
                          </motion.h1>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed mb-6"
                          >
                            {slide.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="pt-2"
                          >
                            <Link href={slide.buttonLink}>
                              <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#EAE59B] text-[#12203B] px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-[#12203B] hover:text-[#EAE59B] transition-all shadow-md borde border-transparent hover:border-[#EAE59B]"
                              >
                                {slide.buttonText} →
                              </motion.button>
                            </Link>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
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

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
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

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-8 h-2 bg-[#EAE59B]"
                : "w-2 h-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
