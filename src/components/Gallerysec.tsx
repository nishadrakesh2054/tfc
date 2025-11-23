"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Match Victory",
    category: "matches",
    photo: "/banner1.jpg",
  },
  {
    id: 2,
    title: "Training Session",
    category: "training",
    photo: "/banner2.jpg",
  },
  {
    id: 3,
    title: "Team Celebration",
    category: "matches",
    photo: "/banner3.jpg",
  },
  { id: 4, title: "Stadium View", category: "venue", photo: "/banner1.jpg" },
];

export default function GallerySec() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setSelectedImage(image.id)}
              className="relative h-80 bg-black/20 border border-[#EAE59B]/30 rounded-xl 
        overflow-hidden cursor-pointer group"
            >
              {/* IMAGE */}
              <Image
                src={image.photo}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-all duration-500"
              />

              {/* OVERLAY TEXT */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#EAE59B]">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
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
              className="relative w-full max-w-4xl bg-gray-900 border border-[#EAE59B] rounded-xl overflow-hidden p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE ICON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 right-1 text-red-700 hover:text-[#EAE59B] text-5xl  z-50"
              >
                &times;
              </button>

              {/* FULL IMAGE IN MODAL */}
              <div className="relative w-full h-64 sm:h-96 md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={
                    galleryImages.find((img) => img.id === selectedImage)
                      ?.photo || ""
                  }
                  alt="Selected"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
