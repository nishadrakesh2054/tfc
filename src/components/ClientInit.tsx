"use client";

import { useEffect } from "react";

// Extend Window interface for external libraries
declare global {
  interface Window {
    Swiper?: {
      new (selector: string, options: Record<string, unknown>): {
        destroy: () => void;
      };
    };
    WOW?: {
      new (): {
        init: () => void;
      };
    };
  }
}

export default function ClientInit() {
  useEffect(() => {
    // Hide preloader after component mounts
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }

    // Initialize Swiper and other plugins after scripts load
    const initializePlugins = () => {
      // Check if Swiper is available
      if (typeof window !== "undefined" && window.Swiper) {
        const Swiper = window.Swiper;

        // Initialize Team Slider
        new Swiper(".team-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".array-next2",
            prevEl: ".array-prev2",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        });

        // Initialize Testimonial Slider
        new Swiper(".tetsimonial-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
          },
        });
      }

      // Initialize WOW animations if available
      if (window.WOW) {
        new window.WOW().init();
      }
    };

    // Initialize immediately if scripts are already loaded, otherwise wait
    if (window.Swiper && window.WOW) {
      initializePlugins();
    } else {
      // Wait for all scripts to load with timeout
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds maximum wait

      const checkScriptsLoaded = setInterval(() => {
        attempts++;
        if (window.Swiper && window.WOW) {
          clearInterval(checkScriptsLoaded);
          initializePlugins();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkScriptsLoaded);
          console.warn("Scripts took too long to load");
        }
      }, 100);

      // Cleanup
      return () => {
        clearInterval(checkScriptsLoaded);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
