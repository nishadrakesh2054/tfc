"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";
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
    location: "Thunderbolts FC, Lalitpur",
    image: "/assets/img/workshop1.png",
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
      <Preloader />

      <Header />

      <Breadcrumb
        title="Tournament"
        items={[{ label: "Home", href: "/" }, { label: "Tournaments" }]}
      />

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
                <h6
                  style={{
                    color: "var(--theme)",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "5px",
                  }}
                >
                  Premier Competition
                </h6>
                <h2
                  className="hero_title tv_hero_title hero_title_1"
                  style={{ marginBottom: "15px" }}
                >
                  {tournament.title}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#7f8c8d",
                    marginBottom: "35px",
                  }}
                >
                  {tournament.description}
                </p>
              </div>

              {/* Tournament Details */}
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "30px",
                  borderRadius: "15px",
                  marginBottom: "30px",
                }}
              >
                <div className="row g-4">
                  <div className="col-12 col-sm-6 col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
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
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className="fa-solid fa-calendar-days"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h6
                          style={{
                            fontSize: "11px",
                            color: "#95a5a6",
                            margin: 0,
                            marginBottom: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Date
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#2c3e50",
                            wordBreak: "break-word",
                          }}
                        >
                          {tournament.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
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
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className="fa-solid fa-clock"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h6
                          style={{
                            fontSize: "11px",
                            color: "#95a5a6",
                            margin: 0,
                            marginBottom: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Duration
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#2c3e50",
                          }}
                        >
                          {tournament.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
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
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className="fa-solid fa-map-marker-alt"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h6
                          style={{
                            fontSize: "11px",
                            color: "#95a5a6",
                            margin: 0,
                            marginBottom: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Location
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#2c3e50",
                            wordBreak: "break-word",
                          }}
                        >
                          {tournament.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
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
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className="fa-solid fa-trophy"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h6
                          style={{
                            fontSize: "11px",
                            color: "#95a5a6",
                            margin: 0,
                            marginBottom: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Prize Pool
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#2c3e50",
                          }}
                        >
                          {tournament.prize}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#9b59b6",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className="fa-solid fa-users"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h6
                          style={{
                            fontSize: "11px",
                            color: "#95a5a6",
                            margin: 0,
                            marginBottom: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Teams
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#2c3e50",
                          }}
                        >
                          {tournament.teams} Teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {tournament.categories.map((category, index) => (
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
                          backgroundColor: "var(--theme)",
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
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
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
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {tournament.prizes.map((prize, index) => (
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
                          backgroundColor: "var(--theme)",
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
                        {prize}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
                  Ready to Compete in <span>NSFL 2025?</span>
                </h2>
                <p className="text-white mt-3" style={{ fontSize: "18px" }}>
                  Register your team now and be part of Nepal&apos;s premier
                  football tournament
                </p>
                <Link href="/register" className="theme-btn mt-4 rounded-pill">
                  REGISTER YOUR TEAM{" "}
                  <i className="fa-solid fa-arrow-up-right"></i>
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
