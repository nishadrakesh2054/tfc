"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

// Window types are defined in types/window.d.ts

export default function Workshops() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    if (window.WOW) new window.WOW().init();
  }, []);

  const workshop = {
    id: 1,
    title: "Advanced Coaching Workshop",
    date: "22 March 2025",
    location: "TFC Training Ground, Lalitpur",
    image: "/assets/img/blog.png",
    description:
      "Professional coaching workshop for aspiring coaches and players. Learn advanced tactics, training methodologies, and modern football techniques from our expert coaching staff.",
    status: "upcoming",
    duration: "3 Days",
    instructor: "Rajesh Shrestha",
    instructorRole: "Head Coach - AFC A License",
    instructorImage: "/assets/img/bipul.png",
    level: "Advanced",
    topics: [
      "Advanced Tactical Analysis",
      "Modern Training Methodologies",
      "Player Development Strategies",
      "Game Management Techniques",
      "Performance Analysis Tools",
    ],
    benefits: [
      "Certificate of Completion",
      "Hands-on Training Sessions",
      "Expert Coaching Guidance",
      "Networking Opportunities",
      "Training Materials Included",
    ],
  };

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
                Coaching Workshop
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
              <li>Workshops</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Workshop Hero Section */}
      <section className="section-padding" style={{ paddingTop: "80px" }}>
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left Side - Image */}
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "30px",
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {workshop.level} Level
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-4">
                <h6
                  style={{
                    color: "#e74c3c",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "15px",
                  }}
                >
                  Professional Training
                </h6>
                <h2
                  className="hero_title tv_hero_title hero_title_1"
                  style={{ marginBottom: "25px" }}
                >
                  {workshop.title}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#7f8c8d",
                    marginBottom: "30px",
                  }}
                >
                  {workshop.description}
                </p>
              </div>

              {/* Workshop Details */}
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "30px",
                  borderRadius: "15px",
                  marginBottom: "30px",
                }}
              >
                <div className="row g-4">
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e74c3c",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                        }}
                      >
                        <i
                          className="fa-solid fa-calendar-days"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div>
                        <h6
                          style={{
                            fontSize: "12px",
                            color: "#95a5a6",
                            margin: 0,
                            textTransform: "uppercase",
                          }}
                        >
                          Date
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          {workshop.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#3498db",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                        }}
                      >
                        <i
                          className="fa-solid fa-clock"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div>
                        <h6
                          style={{
                            fontSize: "12px",
                            color: "#95a5a6",
                            margin: 0,
                            textTransform: "uppercase",
                          }}
                        >
                          Duration
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          {workshop.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#2ecc71",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                        }}
                      >
                        <i
                          className="fa-solid fa-map-marker-alt"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div>
                        <h6
                          style={{
                            fontSize: "12px",
                            color: "#95a5a6",
                            margin: 0,
                            textTransform: "uppercase",
                          }}
                        >
                          Location
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          {workshop.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f39c12",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                        }}
                      >
                        <i
                          className="fa-solid fa-user-tie"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div>
                        <h6
                          style={{
                            fontSize: "12px",
                            color: "#95a5a6",
                            margin: 0,
                            textTransform: "uppercase",
                          }}
                        >
                          Instructor
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          {workshop.instructor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/register" className="theme-btn mt-4">
                REGISTER NOW <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Topics Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="section-title mb-4">
                <h2 className="hero_title tv_hero_title hero_title_1">
                  What You&apos;ll <span>Learn</span>
                </h2>
                <p style={{ fontSize: "16px", color: "#7f8c8d" }}>
                  Comprehensive topics covered in this workshop
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {workshop.topics.map((topic, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#e74c3c",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#fff", fontSize: "16px" }}
                      ></i>
                    </div>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="section-title mb-4">
                <h2 className="hero_title tv_hero_title hero_title_1">
                  Workshop <span>Benefits</span>
                </h2>
                <p style={{ fontSize: "16px", color: "#7f8c8d" }}>
                  What you&apos;ll gain from this program
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {workshop.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#2ecc71",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className="fa-solid fa-gift"
                        style={{ color: "#fff", fontSize: "16px" }}
                      ></i>
                    </div>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="sponsor-section section-padding bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2 className="text-white">
                  Ready to Enhance Your <span>Coaching Skills?</span>
                </h2>
                <p className="text-white mt-3" style={{ fontSize: "18px" }}>
                  Join our Advanced Coaching Workshop and learn from the best in
                  the field
                </p>
                <Link href="/register" className="theme-btn mt-4">
                  REGISTER NOW <i className="fa-solid fa-arrow-up-right"></i>
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
