"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    if ((window as any).WOW) new (window as any).WOW().init();
  }, []);

  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            {["N", "I", "T", "R", "O"].map((letter, i) => (
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
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`col-3 loader-section ${
                  i < 2 ? "section-left" : "section-right"
                }`}
              >
                <div className="bg"></div>
              </div>
            ))}
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
                404 Error
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
              <li>404 Error</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="error-content">
                <img src="/assets/img/404.png" alt="404" className="mb-5" />
                <h2 className="mb-4">Oops! Page Not Found</h2>
                <p className="mb-5">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
                <Link href="/" className="theme-btn">
                  GO BACK HOME <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
