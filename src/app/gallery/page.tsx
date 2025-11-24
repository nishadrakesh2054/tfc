"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { galleryQuery } from "@/sanity/lib/queries";

interface GalleryImage {
  _id: string;
  title: string;
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

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await client.fetch(galleryQuery);
        setGalleryImages(data || []);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setGalleryImages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white py-42">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#EAE59B] text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            Moments on the Field
          </motion.span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white tracking-wider">
            Capturing the <span className="text-[#EAE59B]">Spirit of TFC</span>
          </h1>
          <div className="w-24 h-1 bg-[#EAE59B]"></div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative h-80 bg-gray-800/50 border border-[#EAE59B]/30 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => {
              const imageBuilder = image.image ? urlFor(image.image) : null;
              const imageUrl = imageBuilder
                ? imageBuilder.auto("format").url()
                : null;
              const aspectRatio =
                image.image?.asset?.metadata?.dimensions?.aspectRatio || 1;

              return (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  onClick={() => setSelectedImage(image._id)}
                  className="relative w-full overflow-hidden cursor-pointer border border-white/10 bg-black/30 p-2 shadow-xl transition-all duration-500"
                  style={{ aspectRatio }}
                >
                  {/* IMAGE */}
                  {imageUrl ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={imageUrl}
                        alt={image.image?.alt || image.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-600 text-2xl font-bold">
                        {image.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-[#EAE59B]/10 blur-xl"></div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-black/60 backdrop-blur-md border-t border-[#EAE59B]/30 rounded-t-xl p-3">
                      <h3 className="text-sm lg:text-base font-semibold text-[#EAE59B] line-clamp-2">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>No gallery images found. Add some in the Sanity Studio!</p>
          </div>
        )}

        {/* MODAL */}
        {selectedImage &&
          (() => {
            const selected = galleryImages.find(
              (img) => img._id === selectedImage
            );
            if (!selected || !selected.image) return null;

            const imageBuilder = urlFor(selected.image);
            if (!imageBuilder) return null;
            const fullImageUrl = imageBuilder.width(1200).height(800).url();

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="relative w-full max-w-4xl bg-gray-900 border border-[#EAE59B] rounded-xl overflow-hidden p-2 sm:p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* CLOSE ICON */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-2 right-1 text-red-700 hover:text-[#EAE59B] text-5xl z-50"
                  >
                    &times;
                  </button>

                  {/* FULL IMAGE IN MODAL */}
                  <div className="relative w-full h-64 sm:h-96 md:h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={fullImageUrl}
                      alt={selected.image?.alt || selected.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* IMAGE INFO */}
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-[#EAE59B]">
                      {selected.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
      </div>
    </section>
  );
}
