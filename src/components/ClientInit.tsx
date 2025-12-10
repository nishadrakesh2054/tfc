"use client";

import { useEffect, useRef } from "react";

export default function ClientInit() {
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (initializedRef.current) return;
    
    // Hide preloader after component mounts
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }

    // Initialize Swiper and other plugins after scripts load
    const initializePlugins = () => {
      if (initializedRef.current) return;
      initializedRef.current = true;

      // Check if Swiper is available
      if (typeof window !== "undefined" && window.Swiper) {
        const Swiper = window.Swiper;

        // Only initialize if elements exist and not already initialized
        const teamSliderEl = document.querySelector(".team-slider");
        if (teamSliderEl && !(teamSliderEl as any).swiper) {
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
        }
      }

      // Initialize WOW animations if available
      if (window.WOW && !(window as any).wowInitialized) {
        (window as any).wowInitialized = true;
        const wowInstance = new window.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        wowInstance.init();
      }
    };

    // Initialize immediately if scripts are already loaded, otherwise wait
    if (typeof window !== "undefined" && window.Swiper && window.WOW) {
      // Small delay to ensure DOM is ready
      setTimeout(initializePlugins, 100);
    } else {
      // Wait for all scripts to load with timeout
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds maximum wait

      const checkScriptsLoaded = setInterval(() => {
        attempts++;
        if (typeof window !== "undefined" && window.Swiper && window.WOW) {
          clearInterval(checkScriptsLoaded);
          setTimeout(initializePlugins, 100);
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
