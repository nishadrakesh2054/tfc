"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";

// Window types are defined in types/window.d.ts

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
      <Preloader />

      <Header />

      <Breadcrumb
        title="Contacts"
        items={[{ label: "Home", href: "/" }, { label: "Contacts" }]}
      />

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
                  <ContactForm />
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
