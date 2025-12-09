"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

// Window types are defined in types/window.d.ts

export default function TeamDetails() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    if (window.WOW) new window.WOW().init();
  }, []);

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
                Team Details
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
              <li>Team Details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section Start */}
      <section className="team-details-section fix section-padding">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="team-details-image">
                  <Image
                    src="/assets/img/bipul.png"
                    alt="Bipul Shrestha Team Player"
                    width={500}
                    height={700}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h2 className="number">07</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="team-details-content">
                  <h2>Bipul Shrestha</h2>
                  <span>Forward</span>
                  <div className="top-details">
                    <div className="left-details">
                      <p>Nationality: </p>
                      <span>
                        Nepal
                        <Image
                          src="/assets/img/inner/flag.png"
                          alt="Nepal Flag"
                          width={30}
                          height={20}
                          style={{ marginLeft: "8px" }}
                        />
                      </span>
                    </div>
                    <div className="right-details">
                      <p>Date of Birthday:</p>
                      <span>15 March 1995</span>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Weight: <b>72 KG</b>
                    </li>
                    <li>
                      Height: <b>178 cm</b>
                    </li>
                    <li>
                      AGE: <b>29</b>
                    </li>
                    <li>
                      NUMBER: <b>07</b>
                    </li>
                  </ul>
                  <h3>Biography:</h3>
                  <p className="mb-4 mt-4">
                    Bipul Shrestha, who grew up in Kathmandu, Nepal, fell in
                    love with football at a young age. He enrolled in
                    Thunderbolts Development Center&apos;s youth academy at the
                    age of 12, where his natural talent and dedication helped
                    him stand out among his peers.
                  </p>

                  <p>
                    Bipul advanced through the ranks with remarkable speed and
                    skill. By age 19, he made his professional debut with
                    Thunderbolts FC. Known for his explosive pace, clinical
                    finishing, and ability to create scoring opportunities, he
                    has become a key player for the club and a rising star in
                    Nepali football.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <span>social Icon:</span>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="trophy-box-item">
                <Image
                  src="/assets/img/inner/trophy1.png"
                  alt="NSFL Trophy"
                  width={150}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="content">
                  <h3>NSFL Championship</h3>
                  <span>2022 / 2024 / 2025</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="trophy-box-item">
                <Image
                  src="/assets/img/inner/trophy2.png"
                  alt="Thunderbolts Cup Trophy"
                  width={150}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="content">
                  <h3>Thunderbolts Cup</h3>
                  <span>2023</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="trophy-box-item">
                <Image
                  src="/assets/img/inner/trophy3.png"
                  alt="ANFA Trophy"
                  width={150}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="content">
                  <h3>ANFA League</h3>
                  <span>2021</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="trophy-box-item">
                <Image
                  src="/assets/img/inner/trophy4.png"
                  alt="Nepal Super League Trophy"
                  width={150}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="content">
                  <h3>Nepal Super League</h3>
                  <span>2023</span>
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
