"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

// Window types are defined in types/window.d.ts

export default function Tournaments() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    if (window.WOW) new window.WOW().init();
  }, []);

  const tournament = {
    id: 1,
    title: "NSFL 2025",
    date: "15 March 2025",
    location: "Dasharath Stadium, Kathmandu",
    image: "/assets/img/gallery/g3.jpg",
    description:
      "Join us for the premier football tournament of the year. Watch Thunderbolts FC compete against top teams in Nepal. Experience thrilling matches, passionate fans, and unforgettable moments.",
    status: "upcoming",
    prize: "NPR 50,00,000",
    teams: 12,
    format: "Round Robin + Knockout",
    duration: "2 Months",
    categories: [
      "Professional Teams",
      "Competitive Matches",
      "Live Broadcasting",
      "Professional Referees",
      "Award Ceremony",
    ],
    prizes: [
      "Winner: NPR 30,00,000",
      "Runner-up: NPR 15,00,000",
      "Third Place: NPR 5,00,000",
      "Best Player Award",
      "Fair Play Award",
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
                Tournament
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
              <li>Tournaments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tournament Hero Section */}
      <section
        className="section-padding"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
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
                  src={tournament.image}
                  alt={tournament.title}
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-4">
                <h1
                  className="hero_title tv_hero_title hero_title_1"
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    marginBottom: "25px",
                  }}
                >
                  {tournament.title}
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#7f8c8d",
                    marginBottom: "40px",
                  }}
                >
                  {tournament.description}
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="row g-3">
                <div className="col-md-6">
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: "25px",
                      borderRadius: "15px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#e74c3c";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e0e0e0";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fa-solid fa-calendar-days"
                      style={{
                        color: "#e74c3c",
                        fontSize: "32px",
                        marginBottom: "12px",
                      }}
                    ></i>
                    <h6
                      style={{
                        color: "#95a5a6",
                        fontSize: "12px",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Date
                    </h6>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#2c3e50",
                      }}
                    >
                      {tournament.date}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: "25px",
                      borderRadius: "15px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#3498db";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e0e0e0";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fa-solid fa-map-marker-alt"
                      style={{
                        color: "#3498db",
                        fontSize: "32px",
                        marginBottom: "12px",
                      }}
                    ></i>
                    <h6
                      style={{
                        color: "#95a5a6",
                        fontSize: "12px",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Venue
                    </h6>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#2c3e50",
                      }}
                    >
                      {tournament.location.split(",")[0]}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: "25px",
                      borderRadius: "15px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#f39c12";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e0e0e0";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fa-solid fa-trophy"
                      style={{
                        color: "#f39c12",
                        fontSize: "32px",
                        marginBottom: "12px",
                      }}
                    ></i>
                    <h6
                      style={{
                        color: "#95a5a6",
                        fontSize: "12px",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Prize Pool
                    </h6>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#2c3e50",
                      }}
                    >
                      {tournament.prize}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: "25px",
                      borderRadius: "15px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#2ecc71";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e0e0e0";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i
                      className="fa-solid fa-users"
                      style={{
                        color: "#2ecc71",
                        fontSize: "32px",
                        marginBottom: "12px",
                      }}
                    ></i>
                    <h6
                      style={{
                        color: "#95a5a6",
                        fontSize: "12px",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Teams
                    </h6>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#2c3e50",
                      }}
                    >
                      {tournament.teams}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ marginTop: "30px" }}>
                <Link href="/register" className="theme-btn">
                  REGISTER YOUR TEAM{" "}
                  <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Details Grid */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row g-4">
            {/* Tournament Features */}
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "40px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <div className="section-title mb-4">
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    Tournament <span>Highlights</span>
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#7f8c8d",
                      marginTop: "10px",
                    }}
                  >
                    What makes this tournament exceptional
                  </p>
                </div>
                <div className="row g-3">
                  {tournament.categories.map((category, index) => (
                    <div key={index} className="col-md-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "15px",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            backgroundColor: "#e74c3c",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "12px",
                            flexShrink: 0,
                          }}
                        >
                          <i
                            className="fa-solid fa-check"
                            style={{ color: "#fff", fontSize: "14px" }}
                          ></i>
                        </div>
                        <span
                          style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            color: "#2c3e50",
                          }}
                        >
                          {category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prize Distribution */}
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "40px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <div className="section-title mb-4">
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    Prize <span>Breakdown</span>
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#7f8c8d",
                      marginTop: "10px",
                    }}
                  >
                    Rewards for top performers
                  </p>
                </div>
                <div style={{ marginTop: "30px" }}>
                  {tournament.prizes.map((prize, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                        backgroundColor: index === 0 ? "#fff5e6" : "#f8f9fa",
                        borderRadius: "12px",
                        marginBottom: "15px",
                        border: index === 0 ? "2px solid #f39c12" : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: index === 0 ? "#f39c12" : "#e74c3c",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                          flexShrink: 0,
                        }}
                      >
                        {index === 0 ? (
                          <i
                            className="fa-solid fa-trophy"
                            style={{ color: "#fff", fontSize: "24px" }}
                          ></i>
                        ) : index === 1 ? (
                          <i
                            className="fa-solid fa-medal"
                            style={{ color: "#fff", fontSize: "20px" }}
                          ></i>
                        ) : (
                          <span
                            style={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            fontWeight: index === 0 ? "700" : "500",
                            color: "#2c3e50",
                          }}
                        >
                          {prize}
                        </p>
                      </div>
                    </div>
                  ))}
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
