"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  { id: 1, title: "Match Victory", category: "matches" },
  { id: 2, title: "Training Session", category: "training" },
  { id: 3, title: "Team Celebration", category: "matches" },
  { id: 4, title: "Stadium View", category: "venue" },
  { id: 5, title: "Player Action", category: "matches" },
  { id: 6, title: "Team Photo", category: "team" },
  { id: 7, title: "Training Ground", category: "training" },
  { id: 8, title: "Championship Moment", category: "matches" },
  { id: 9, title: "Fans Support", category: "fans" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-[#EAE59B] to-[#EAE59B]/80 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-300">
            Capturing our greatest moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setSelectedImage(image.id)}
              className="relative h-64 bg-linear-to-br from-[#EAE59B]/20 to-[#12203B]/20 border border-[#EAE59B]/30 rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h3 className="text-xl font-bold text-[#EAE59B]">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-center text-6xl">
                ⚽
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
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
              className="max-w-4xl w-full bg-gray-800 border border-[#EAE59B] rounded-xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-[#EAE59B] mb-4">
                {galleryImages.find((img) => img.id === selectedImage)?.title}
              </h2>
              <div className="aspect-video bg-linear-to-br from-[#EAE59B]/20 to-[#12203B]/20 rounded-lg flex items-center justify-center text-9xl">
                ⚽
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-4 bg-[#EAE59B] text-[#12203B] px-6 py-2 rounded-lg font-semibold hover:bg-[#EAE59B]/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
