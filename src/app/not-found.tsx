"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function NotFound() {
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

  return (
    <>
      <Preloader />

      <Header />

      <Breadcrumb title="404 Error" items={[{ label: "Home", href: "/" }, { label: "404 Error" }]} />

      <section className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="error-content">
                <Image
                  src="/assets/img/404.png"
                  alt="404"
                  className="mb-5"
                  width={100}
                  height={100}
                />
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
