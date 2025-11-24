"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { galleryQueryLimited } from "@/sanity/lib/queries";

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

export default function GallerySec() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await client.fetch(galleryQueryLimited(4));
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
    <section
      id="gallery"
      className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white py-20"
    >
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-80 bg-gray-800/50 border border-[#EAE59B]/30 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => {
              const imageBuilder = image.image ? urlFor(image.image) : null;
              const imageUrl = imageBuilder
                ? imageBuilder.auto("format").url()
                : null;

              return (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image._id)}
                  className="relative h-80 bg-black/20 border border-[#EAE59B]/30 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-[#EAE59B]/20 transition-all duration-300"
                >
                  {/* IMAGE */}
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={image.image?.alt || image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}

                  {/* OVERLAY TEXT */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#EAE59B]">
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
        <div className=" sm:flex items-center justify-end pt-10">
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#EAE59B] text-[#12203B] px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-[#12203B] hover:text-[#EAE59B] transition-all  border-transparent hover:border-[#EAE59B]"
            >
              explore more
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </Link>
        </div>
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
                  <div className="relative w-full h-64 sm:h-96 md:h-[560px] rounded-lg overflow-hidden">
                    <Image
                      src={fullImageUrl}
                      alt={selected.image?.alt || selected.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 320px"
                      className="object-contain"
                    />
                  </div>
               
                </motion.div>
              </motion.div>
            );
          })()}
      </div>
    </section>
  );
}
