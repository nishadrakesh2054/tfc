"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

// Extend Window interface for WOW.js
declare global {
  interface Window {
    WOW?: {
      new (): {
        init: () => void;
      };
    };
  }
}

interface GalleryImage {
  src: string;
  category: "all" | "player" | "championship" | "training";
  alt: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const galleryImages: GalleryImage[] = [
    // Player Images (8 images)
    {
      src: "/assets/img/gallery/g1.jpg",
      category: "player",
      alt: "TFC Player Action Shot 1",
    },
    {
      src: "/assets/img/gallery/g2.jpg",
      category: "player",
      alt: "TFC Player Action Shot 2",
    },
    {
      src: "/assets/img/gallery/g3.jpg",
      category: "player",
      alt: "TFC Player Action Shot 3",
    },
    {
      src: "/assets/img/gallery/g4.jpg",
      category: "player",
      alt: "TFC Player Action Shot 4",
    },
    {
      src: "/assets/img/gallery/g5.jpg",
      category: "player",
      alt: "TFC Player Action Shot 5",
    },
    {
      src: "/assets/img/gallery/g6.jpg",
      category: "player",
      alt: "TFC Player Action Shot 6",
    },
    {
      src: "/assets/img/gallery/g1.jpg",
      category: "player",
      alt: "TFC Player Portrait 1",
    },
    {
      src: "/assets/img/gallery/g2.jpg",
      category: "player",
      alt: "TFC Player Portrait 2",
    },

    // Championship Images (7 images)
    {
      src: "/assets/img/gallery/g3.jpg",
      category: "championship",
      alt: "TFC Championship Trophy 1",
    },
    {
      src: "/assets/img/gallery/g4.jpg",
      category: "championship",
      alt: "TFC Championship Celebration 1",
    },
    {
      src: "/assets/img/gallery/g5.jpg",
      category: "championship",
      alt: "TFC Championship Trophy 2",
    },
    {
      src: "/assets/img/gallery/g6.jpg",
      category: "championship",
      alt: "TFC Championship Celebration 2",
    },
    {
      src: "/assets/img/gallery/g1.jpg",
      category: "championship",
      alt: "TFC Championship Victory",
    },
    {
      src: "/assets/img/gallery/g2.jpg",
      category: "championship",
      alt: "TFC Championship Team Photo",
    },
    {
      src: "/assets/img/gallery/g3.jpg",
      category: "championship",
      alt: "TFC Championship Moment",
    },

    // Training Images (5 images)
    {
      src: "/assets/img/gallery/g4.jpg",
      category: "training",
      alt: "TFC Training Session 1",
    },
    {
      src: "/assets/img/gallery/g5.jpg",
      category: "training",
      alt: "TFC Training Session 2",
    },
    {
      src: "/assets/img/gallery/g6.jpg",
      category: "training",
      alt: "TFC Training Drill 1",
    },
    {
      src: "/assets/img/gallery/g1.jpg",
      category: "training",
      alt: "TFC Training Drill 2",
    },
    {
      src: "/assets/img/gallery/g2.jpg",
      category: "training",
      alt: "TFC Team Practice",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            {["T", "F", "C"].map((letter, i) => (
              <span
                key={i}
                data-text-preloader={letter}
                className="letters-loading"
              >
                {" "}
                {letter}{" "}
              </span>
            ))}
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

      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      <Header />

      <div
        className="gt-breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="gt-page-heading">
            <div className="gt-breadcrumb-sub-title">
              <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Our Gallery
              </h1>
            </div>
            <ul
              className="gt-breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
            >
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>Our Gallery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="gallery-section fix section-padding">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <button
                onClick={() => setActiveFilter("all")}
                className={`nav-link ${activeFilter === "all" ? "active" : ""}`}
              >
                All <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setActiveFilter("player")}
                className={`nav-link ${
                  activeFilter === "player" ? "active" : ""
                }`}
              >
                Players <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setActiveFilter("championship")}
                className={`nav-link ${
                  activeFilter === "championship" ? "active" : ""
                }`}
              >
                Championship <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setActiveFilter("training")}
                className={`nav-link ${
                  activeFilter === "training" ? "active" : ""
                }`}
              >
                Training <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {filteredImages.map((image, index) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                    <div
                      className="gallery-thumb-inner wow fadeInUp"
                      data-wow-delay={`${(index % 3) * 0.1}s`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <a
                        href="https://instagram.com/thunderboltsfc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gt-icon"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
