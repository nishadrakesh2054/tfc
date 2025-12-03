"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

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

export default function Team() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);

    if (window.WOW) new window.WOW().init();
  }, []);

  const players = [
    {
      img: "/assets/img/bipul.png",
      number: "07",
      name: "Bipul Shrestha",
      position: "Forward",
      appearances: 106,
      goals: 29,
      assists: 35,
    },
    {
      img: "/assets/img/bipul.png",
      number: "16",
      name: "Aashish Chaudhary",
      position: "Midfielder",
      appearances: 98,
      goals: 15,
      assists: 42,
    },
    {
      img: "/assets/img/bipul.png",
      number: "19",
      name: "Sagar Thapa",
      position: "Defender",
      appearances: 112,
      goals: 8,
      assists: 18,
    },
    {
      img: "/assets/img/bipul.png",
      number: "10",
      name: "Rohan Sharma",
      position: "Forward",
      appearances: 89,
      goals: 34,
      assists: 28,
    },
    {
      img: "/assets/img/bipul.png",
      number: "14",
      name: "Suraj Gurung",
      position: "Goalkeeper",
      appearances: 95,
      goals: 0,
      assists: 2,
    },

    // Added players
    {
      img: "/assets/img/bipul.png",
      number: "05",
      name: "Kiran Lama",
      position: "Defender",
      appearances: 120,
      goals: 4,
      assists: 12,
    },
    {
      img: "/assets/img/bipul.png",
      number: "08",
      name: "Manish Basnet",
      position: "Midfielder",
      appearances: 102,
      goals: 11,
      assists: 33,
    },
    {
      img: "/assets/img/bipul.png",
      number: "11",
      name: "Sudip Rai",
      position: "Forward",
      appearances: 76,
      goals: 27,
      assists: 19,
    },
    {
      img: "/assets/img/bipul.png",
      number: "21",
      name: "Roshan Bhujel",
      position: "Defender",
      appearances: 88,
      goals: 3,
      assists: 14,
    },
    {
      img: "/assets/img/bipul.png",
      number: "03",
      name: "Anish Dhami",
      position: "Defender",
      appearances: 110,
      goals: 2,
      assists: 9,
    },
    {
      img: "/assets/img/bipul.png",
      number: "18",
      name: "Prem Tamang",
      position: "Midfielder",
      appearances: 91,
      goals: 9,
      assists: 27,
    },
    {
      img: "/assets/img/bipul.png",
      number: "22",
      name: "Deepak Khadka",
      position: "Goalkeeper",
      appearances: 67,
      goals: 0,
      assists: 1,
    },
    {
      img: "/assets/img/bipul.png",
      number: "09",
      name: "Sujan Maharjan",
      position: "Forward",
      appearances: 82,
      goals: 31,
      assists: 21,
    },
    {
      img: "/assets/img/bipul.png",
      number: "06",
      name: "Bibek Karki",
      position: "Defender",
      appearances: 118,
      goals: 6,
      assists: 10,
    },
    {
      img: "/assets/img/bipul.png",
      number: "12",
      name: "Niraj Bhandari",
      position: "Midfielder",
      appearances: 94,
      goals: 13,
      assists: 29,
    },
    {
      img: "/assets/img/bipul.png",
      number: "17",
      name: "Kamal Thapa",
      position: "Forward",
      appearances: 79,
      goals: 23,
      assists: 16,
    },
  ];

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
                Our Team
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
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="team-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <div className="section-title hero_title tv_hero_title hero_title_1">
              <h2>
                Meet Our <span>players</span>
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {players.map((player, index) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${(index % 4) * 0.1}s`}
                key={index}
              >
                <div className="our-club-payer-item">
                  <div className="player-image">
                    <Image
                      src={player.img}
                      alt={player.name}
                      width={300}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h2 className="number">{player.number}</h2>
                    <div className="player-content">
                      <h4>
                        <Link href="/team-details">{player.name}</Link>
                      </h4>
                      <p>{player.position}</p>
                    </div>
                    <div className="content-item">
                      <div className="content">
                        <h6>Appearances</h6>
                        <h5>{player.appearances}</h5>
                        <span>2025/2026</span>
                        <h6 className="title">0</h6>
                      </div>
                      <div className="content">
                        <h6>TFC Goals</h6>
                        <h5>{player.goals}</h5>
                        <span>2025/2026</span>
                        <h6 className="title">0</h6>
                      </div>
                      <div className="content">
                        <h6>TFC Assists</h6>
                        <h5>{player.assists}</h5>
                        <span>2025/2026</span>
                        <h6 className="title">0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
