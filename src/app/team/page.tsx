"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";
// Window types are defined in types/window.d.ts

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
    },
    {
      img: "/assets/img/bipul.png",
      number: "16",
      name: "Aashish Chaudhary",
      position: "Midfielder",
    },
    {
      img: "/assets/img/bipul.png",
      number: "19",
      name: "Sagar Thapa",
      position: "Defender",
    },
    {
      img: "/assets/img/bipul.png",
      number: "10",
      name: "Rohan Sharma",
      position: "Forward",
    },
    {
      img: "/assets/img/bipul.png",
      number: "14",
      name: "Suraj Gurung",
      position: "Goalkeeper",
    },

    // Added players
    {
      img: "/assets/img/bipul.png",
      number: "05",
      name: "Kiran Lama",
      position: "Defender",
    },
    {
      img: "/assets/img/bipul.png",
      number: "08",
      name: "Manish Basnet",
      position: "Midfielder",
    },
    {
      img: "/assets/img/bipul.png",
      number: "11",
      name: "Sudip Rai",
      position: "Forward",
    },
    {
      img: "/assets/img/bipul.png",
      number: "21",
      name: "Roshan Bhujel",
      position: "Defender",
    },
    {
      img: "/assets/img/bipul.png",
      number: "03",
      name: "Anish Dhami",
      position: "Defender",
    },
    {
      img: "/assets/img/bipul.png",
      number: "18",
      name: "Prem Tamang",
      position: "Midfielder",
    },
    {
      img: "/assets/img/bipul.png",
      number: "22",
      name: "Deepak Khadka",
      position: "Goalkeeper",
    },
    {
      img: "/assets/img/bipul.png",
      number: "09",
      name: "Sujan Maharjan",
      position: "Forward",
    },
    {
      img: "/assets/img/bipul.png",
      number: "06",
      name: "Bibek Karki",
      position: "Defender",
    },
    {
      img: "/assets/img/bipul.png",
      number: "12",
      name: "Niraj Bhandari",
      position: "Midfielder",
    },
    {
      img: "/assets/img/bipul.png",
      number: "17",
      name: "Kamal Thapa",
      position: "Forward",
    },
  ];

  return (
    <>
      <Preloader />

      <Header />

      <Breadcrumb title="Our Team" items={[{ label: "Home", href: "/" }, { label: "Team" }]} />

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
