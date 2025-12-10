"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";
// Window types are defined in types/window.d.ts

export default function Register() {
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

      <Breadcrumb
        title="Academy Registration"
        items={[{ label: "Home", href: "/" }, { label: "Register" }]}
      />

      <section className="contact-box-section fix section-padding">
        <div className="container">
          <div className="contact-box-wrapper">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="gt-contact-right-items">
                  <div className="section-title text-center mb-4">
                    <h2 className="hero_title tv_hero_title hero_title_1">
                      Join TFC Sports <span>Academy</span>
                    </h2>
                    <p
                      className="mt-3"
                      style={{ fontSize: "16px", color: "#7f8c8d" }}
                    >
                      Fill out the registration form below to join our academy
                      programs. We&apos;ll get back to you soon!
                    </p>
                  </div>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
