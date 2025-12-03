"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

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

export default function About() {
  useEffect(() => {
    // Hide preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }

    // Initialize plugins
    const initializePlugins = () => {
      if (typeof window !== "undefined" && window.Swiper) {
        const Swiper = window.Swiper;

        // Team Slider
        new Swiper(".team-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".array-next2",
            prevEl: ".array-prev2",
          },
          breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          },
        });

        // Testimonial Slider
        new Swiper(".testimonial-slider-3", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
        });
      }

      if (window.WOW) {
        new window.WOW().init();
      }
    };

    const checkScriptsLoaded = setInterval(() => {
      if (window.Swiper) {
        clearInterval(checkScriptsLoaded);
        initializePlugins();
      }
    }, 100);

    return () => clearInterval(checkScriptsLoaded);
  }, []);

  return (
    <>
      {/* Preloader */}
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

      {/* Breadcrumb */}
      <div
        className="gt-breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="gt-page-heading">
            <div className="gt-breadcrumb-sub-title">
              <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
                about us
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
              <li>about us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section fix section-padding">
        <div className="left-shape">
          <Image
            src="/assets/img/home-1/about/left-shape.png"
            alt="Left Shape Decoration"
            width={200}
            height={400}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="right-shape">
          <Image
            src="/assets/img/home-1/about/right-shape.png"
            alt="Right Shape Decoration"
            width={200}
            height={400}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image">
                  <Image
                    src="/assets/img/aboutmiddle.png"
                    alt="About Thunderbolts FC"
                    width={500}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="thumb1">
                    <Image
                      src="/assets/img/aboutbg.png"
                      alt="Background"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
            
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-0">
                    <h6 className="wow fadeInUp">
                      THUNDERBOLTS FOOTBALL CLUB (TFC)
                    </h6>
                    <h2 className="hero_title tv_hero_title hero_title_1">
                      More than a club. A <span>movement.</span>
                    </h2>
                  </div>
                  <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                    Thunderbolts Football Club (TFC) is a dynamic and ambitious
                    football club operating as a subsidiary of TDC. Established
                    with the goal of becoming a dominant force in the football
                    landscape, TFC is dedicated to achieving success at the
                    highest levels of the sport through strategic planning,
                    talent development, and competitive excellence.
                  </p>
                  <p className="about-text wow fadeInUp" data-wow-delay=".4s">
                    Beyond professional football, TFC manages and develops the
                    football and futsal academy under TDC, creating a structured
                    talent pipeline with world-class training programs for young
                    athletes.
                  </p>
                  <div
                    className="about-list-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-check"></i> Elite
                        Player Development
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check"></i> Football &
                        Futsal Academy
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-check"></i>{" "}
                        Professional Coaching Staff
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check"></i> Strategic
                        Excellence
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    JOIN NOW <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-content">
                <div className="section-title">
                  <h6>OUR MISSION</h6>
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    Developing <span>Excellence</span>
                  </h2>
                </div>
                <p>
                  At Thunderbolts Football Club, our mission is to develop and
                  promote football excellence by fostering talent, instilling
                  discipline, and creating a structured pathway for young
                  athletes to achieve their full potential.
                </p>
                <p>
                  Through our comprehensive training programs and professional
                  development initiatives, we seek to empower players with the
                  knowledge, skills, and experience required to compete at elite
                  levels. We are dedicated to upholding the highest standards of
                  professionalism, sportsmanship, and integrity in every aspect
                  of our operations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-content">
                <div className="section-title">
                  <h6>OUR VISION</h6>
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    Building a <span>Legacy</span>
                  </h2>
                </div>
                <p>
                  Our vision is to establish Thunderbolts Football Club as a
                  premier football institution recognized for excellence in
                  player development, competitive success, and community
                  engagement.
                </p>
                <p>
                  We aspire to build a sustainable football ecosystem that not
                  only strengthens our club&apos;s reputation but also
                  contributes to the overall growth of football at both national
                  and international levels. Through strategic partnerships,
                  state-of-the-art infrastructure, and a commitment to
                  innovation, we aim to set new benchmarks in football
                  development and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="about-section fix section-padding pt-0 pb-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">STRATEGIC GOALS</h6>
            <h2
              className="hero_title tv_hero_title hero_title_1 wow fadeInUp"
              data-wow-delay=".2s"
            >
              Our <span>Objectives</span>
            </h2>
          </div>
          <div className="row g-4 mt-3">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-content text-center">
                <div className="icon mb-3">
                  <i
                    className="fa-solid fa-futbol"
                    style={{ fontSize: "48px", color: "#ff6b00" }}
                  ></i>
                </div>
                <h4>Strong Football Academy</h4>
                <p>
                  Establish a structured training program to identify, nurture,
                  and develop young talents for both football and futsal under
                  TDC.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="about-content text-center">
                <div className="icon mb-3">
                  <i
                    className="fa-solid fa-users"
                    style={{ fontSize: "48px", color: "#ff6b00" }}
                  ></i>
                </div>
                <h4>Youth Development</h4>
                <p>
                  Provide a robust platform for aspiring footballers to grow,
                  learn, and seamlessly transition into professional careers
                  within the sport.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="about-content text-center">
                <div className="icon mb-3">
                  <i
                    className="fa-solid fa-trophy"
                    style={{ fontSize: "48px", color: "#ff6b00" }}
                  ></i>
                </div>
                <h4>Competitive Performance</h4>
                <p>
                  Implement cutting-edge training methodologies and tactical
                  strategies to strengthen the squad and ensure sustained
                  success.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="about-content text-center">
                <div className="icon mb-3">
                  <i
                    className="fa-solid fa-chart-line"
                    style={{ fontSize: "48px", color: "#ff6b00" }}
                  ></i>
                </div>
                <h4>Sustainable Club Model</h4>
                <p>
                  Focus on financial stability, diversified revenue streams, and
                  strong community support to create a resilient institution.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="about-content text-center">
                <div className="icon mb-3">
                  <i
                    className="fa-solid fa-handshake"
                    style={{ fontSize: "48px", color: "#ff6b00" }}
                  ></i>
                </div>
                <h4>Team Spirit & Sportsmanship</h4>
                <p>
                  Encourage and uphold values of discipline, teamwork, and
                  integrity both on and off the pitch.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="about-content text-center">
                <div className="icon mb-3">
                  <i
                    className="fa-solid fa-globe"
                    style={{ fontSize: "48px", color: "#ff6b00" }}
                  ></i>
                </div>
                <h4>Expand Recognition</h4>
                <p>
                  Enhance brand visibility through media presence, fan
                  engagement, and participation in prestigious tournaments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">OUR FOUNDATION</h6>
            <h2
              className="hero_title tv_hero_title hero_title_1 wow fadeInUp"
              data-wow-delay=".2s"
            >
              Core <span>Values</span>
            </h2>
          </div>
          <div className="row g-4 mt-3">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="about-content text-center p-4 h-100 d-flex flex-column"
                style={{
                  border: "2px solid #ff6b00",
                  borderRadius: "10px",
                  minHeight: "220px",
                }}
              >
                <h4 style={{ color: "#ff6b00" }}>Excellence</h4>
                <p className="flex-grow-1 d-flex align-items-center">
                  Striving for the highest standards in training, performance,
                  and management, ensuring continual growth and development.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div
                className="about-content text-center p-4 h-100 d-flex flex-column"
                style={{
                  border: "2px solid #ff6b00",
                  borderRadius: "10px",
                  minHeight: "220px",
                }}
              >
                <h4 style={{ color: "#ff6b00" }}>Integrity</h4>
                <p className="flex-grow-1 d-flex align-items-center">
                  Upholding fairness, transparency, and ethical conduct in all
                  operations, fostering trust and respect.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div
                className="about-content text-center p-4 h-100 d-flex flex-column"
                style={{
                  border: "2px solid #ff6b00",
                  borderRadius: "10px",
                  minHeight: "220px",
                }}
              >
                <h4 style={{ color: "#ff6b00" }}>Passion</h4>
                <p className="flex-grow-1 d-flex align-items-center">
                  Encouraging a deep love for the game and unwavering commitment
                  to growth and success.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div
                className="about-content text-center p-4 h-100 d-flex flex-column"
                style={{
                  border: "2px solid #ff6b00",
                  borderRadius: "10px",
                  minHeight: "220px",
                }}
              >
                <h4 style={{ color: "#ff6b00" }}>Innovation</h4>
                <p className="flex-grow-1 d-flex align-items-center">
                  Continuously evolving our training techniques and strategies
                  to maintain a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Aspirations Section */}
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">LOOKING AHEAD</h6>
            <h2
              className="hero_title tv_hero_title hero_title_1 wow fadeInUp"
              data-wow-delay=".2s"
            >
              Future <span>Aspirations</span>
            </h2>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-list-items">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "20px" }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#ff6b00", marginRight: "10px" }}
                    ></i>
                    <strong>Homegrown Talent Pipeline:</strong> Establish a
                    robust pipeline through our football and futsal academy,
                    ensuring a steady influx of skilled players.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#ff6b00", marginRight: "10px" }}
                    ></i>
                    <strong>International Recognition:</strong> Expand our reach
                    by participating in nationally and internationally
                    recognized tournaments.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#ff6b00", marginRight: "10px" }}
                    ></i>
                    <strong>State-of-the-Art Facilities:</strong> Develop
                    world-class training facilities for player development and
                    high-performance training.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-list-items">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "20px" }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#ff6b00", marginRight: "10px" }}
                    ></i>
                    <strong>Strategic Partnerships:</strong> Forge partnerships
                    with sponsors, football organizations, and educational
                    institutions to strengthen our network.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#ff6b00", marginRight: "10px" }}
                    ></i>
                    <strong>Inspire the Next Generation:</strong> Set new
                    benchmarks for success and remain a beacon of footballing
                    excellence and ambition.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#ff6b00", marginRight: "10px" }}
                    ></i>
                    <strong>Community Engagement:</strong> Build strong
                    relationships with fans, supporters, and local stakeholders.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".7s">
            <p
              style={{
                fontSize: "18px",
                fontStyle: "italic",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <strong>Thunderbolts Football Club (TFC)</strong> is more than
              just a football team—it is a movement dedicated to excellence,
              development, and the future of football. With a clear vision,
              structured approach, and unwavering determination, TFC is poised
              to make a lasting impact in the world of football.
            </p>
          </div>
        </div>
      </section>

      {/* Trophy Section */}
      <section className="trophy-section section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="trophy-box-item">
                <Image
                  src="/assets/img/inner/trophy1.png"
                  alt="NSFL Trophy"
                  width={150}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="content">
                  <h3>NSFL</h3>
                  <span>2025</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
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
                  <span>2025</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="trophy-box-item">
                <Image
                  src="/assets/img/inner/trophy3.png"
                  alt="ANFA Trophy"
                  width={150}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="content">
                  <h3>ANFA</h3>
                  <span>2021</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
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

      {/* Sponsor Section */}
      <section
        className="sponsor-section section-padding bg-cover"
        style={{ backgroundImage: "url('/assets/img/home-1/sponsor-bg.jpg')" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">Events & Clubs</h6>
            <h2 className="hero_title tv_hero_title hero_title_1">
              Official Events & <span>valued</span> Clubs
            </h2>
          </div>
          <div className="sponsor-wrapper-21">
            <div className="table-responsive">
              <div className="sponsor-wrap">
                <div className="sponsor-box-items">
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/pinklogo.png"
                      alt="Pink Logo Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/tbc.png"
                      alt="TBC Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/noc.png"
                      alt="NOC Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/logo3.png"
                      alt="TFC Logo"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                </div>
                <div className="sponsor-box-items">
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/logo3.png"
                      alt="TFC Logo"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/pinklogo.png"
                      alt="Pink Logo Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/tbc.png"
                      alt="TBC Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/noc.png"
                      alt="NOC Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/logo3.png"
                      alt="TFC Logo"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="sponsor-box-items">
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/pinklogo.png"
                      alt="Pink Logo Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/tbc.png"
                      alt="TBC Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/tfclogo/noc.png"
                      alt="NOC Partner"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
                  <div className="sponsor-img">
                    <Image
                      src="/assets/img/logo3.png"
                      alt="TFC Logo"
                      width={120}
                      height={80}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="sponsor-img bb-none"></div>
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
