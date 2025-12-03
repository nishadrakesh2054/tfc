"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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

export default function Contact() {
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
                Contacts
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
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contact-info-section fix">
        <div className="container">
          <div className="contact-info-wrapper">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-items">
                  <h3>EMAIL NOW</h3>
                  <p>
                    <a href="mailto:info@thunderbolts.com.np">
                      info@thunderbolts.com.np{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-items">
                  <h3>location</h3>
                  <p>Dhapakhel, Lalitpur, Nepal</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-items">
                  <h3>phone number</h3>
                  <p>
                    <a href="tel:+9779801973975">
                      {" "}
                      +977 980 197 3975 ,<span>+977 980 197 3985</span>{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-box-section fix section-padding pt-0">
        <div className="container">
          <div className="contact-box-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="map-area">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4274419317535!2d85.32312107611213!3d27.642244128358538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17005434cb05%3A0xa7dc16fb1af01d1!2sThunderbolts%20Development%20Center!5e0!3m2!1sen!2snp!4v1724835834200!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    className="filter hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gt-contact-right-items">
                  <h2>Send Us Message</h2>

                  <form
                    action="contact.php"
                    id="contact-form"
                    className="contact-form-box"
                  >
                    <div className="row g-4 align-items-center">
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h4>Your Name</h4>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h4>Your Email</h4>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h4>Your Phone Number</h4>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Your Phone Number"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h4>Your Message</h4>
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            rows={1}
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <button className="theme-btn mt-0" type="submit">
                          SEND MESSAGE{" "}
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
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
