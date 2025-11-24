"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let imagesLoaded = 0;
    let totalImages = 0;

    const checkComplete = () => {
      // Check if all images are loaded and minimum time has passed
      if (imagesLoaded >= totalImages && document.readyState === "complete") {
        // Minimum display time for smooth UX (800ms)
        timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    // Count images on page
    const images = document.querySelectorAll("img");
    totalImages = images.length || 1; // At least 1 to prevent division by zero

    // If no images, just wait for document ready
    if (totalImages === 0) {
      totalImages = 1;
    }

    // Handle image load
    const handleImageLoad = () => {
      imagesLoaded++;
      checkComplete();
    };

    // Add load listeners to images
    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad); // Count errors as loaded
      }
    });

    // Handle window load
    const handleWindowLoad = () => {
      checkComplete();
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      // Give a moment for images to start loading
      setTimeout(() => {
        checkComplete();
      }, 300);
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    // Fallback: hide loader after max 3 seconds
    const maxTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(maxTimeout);
      window.removeEventListener("load", handleWindowLoad);
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0  bg-[#12203B] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Logo/Text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#EAE59B] mb-2 tracking-wider">
                TFC
              </h1>
              <p className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em]">
                Thunderbolts Football Club
              </p>
            </motion.div>

            {/* Loading Spinner */}
            <div className="relative w-16 h-16 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-16 h-16 border-4 border-[#EAE59B]/20 border-t-[#EAE59B] rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-[#EAE59B]/40 rounded-full mx-auto my-auto"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 text-[#EAE59B] text-sm font-semibold uppercase tracking-wider"
            >
              Loading...
            </motion.p>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #EAE59B 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
