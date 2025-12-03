"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import SponsorSection from "@/components/home/SponsorSection";
import StructuredData from "@/components/StructuredData";

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

export default function Home() {
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

    // Wait for all scripts to load
    const checkScriptsLoaded = setInterval(() => {
      if (window.Swiper) {
        clearInterval(checkScriptsLoaded);
        initializePlugins();
      }
    }, 100);

    // Cleanup
    return () => {
      clearInterval(checkScriptsLoaded);
    };
  }, []);

  return (
    <>
      <StructuredData />

      {/* Preloader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="T" className="letters-loading">
              {" "}
              T{" "}
            </span>
            <span data-text-preloader="F" className="letters-loading">
              {" "}
              F{" "}
            </span>
            <span data-text-preloader="C" className="letters-loading">
              {" "}
              C{" "}
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Back To Top Start */}
      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>

      {/* MouseCursor Start */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      <Header />

      <HeroSection />

      <AboutSection />

      {/* Team Section Start */}
      <TeamSection />

      <TestimonialSection />

      <SponsorSection />

      <Footer />
    </>
  );
}
