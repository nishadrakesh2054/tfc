"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";

// Window types are defined in types/window.d.ts

interface AcademyProgram {
  id: number;
  title: string;
  ageGroup: string;
  description: string;
  features: string[];
  image: string;
}

export default function Academy() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);

    if (window.WOW) new window.WOW().init();
  }, []);

  const programs: AcademyProgram[] = [
    {
      id: 1,
      title: "Grassroots",
      ageGroup: "6 – 11 years old",
      description:
        "Our Grassroots program is designed to introduce young athletes to the fundamentals of sports in a fun and engaging environment. Through age-appropriate training and activities, we nurture their passion for sports while building essential skills.",
      features: [
        "Basic ball control and dribbling",
        "Introduction to passing and shooting",
        "Fun games and activities",
        "Teamwork and sportsmanship",
        "Physical development exercises",
      ],
      image: "/assets/img/blog.png",
    },
    {
      id: 2,
      title: "Intermediate",
      ageGroup: "12 – 15 years old",
      description:
        "Structured training program focusing on technical skills, tactical awareness, and physical development. Players learn advanced techniques and begin to understand game strategy.",
      features: [
        "Advanced technical training",
        "Tactical understanding",
        "Position-specific coaching",
        "Fitness and conditioning",
        "Competitive match experience",
      ],
      image: "/assets/img/blog.png",
    },
    {
      id: 3,
      title: "Senior",
      ageGroup: "16+ years old",
      description:
        "High-performance program for talented players aiming for professional careers. Intensive training, advanced tactical analysis, and competitive opportunities to prepare for senior level football.",
      features: [
        "Professional-level training",
        "Advanced tactical analysis",
        "Strength and conditioning",
        "Mental preparation",
        "Pathway to senior team",
      ],
      image: "/assets/img/blog.png",
    },
  ];

  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb
        title="TFC Sports Academy"
        items={[{ label: "Home", href: "/" }, { label: "Academy" }]}
      />

      {/* Academy Hero Section */}

      {/* Academy Programs Section */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <div className="section-title hero_title tv_hero_title hero_title_1">
              <h2>
                Our <span>Programs</span>
              </h2>
            </div>
            <p className="mt-3">
              Structured programs designed for different age groups and skill
              levels
            </p>
          </div>

          <div className="row g-4">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${(index % 3) * 0.2}s`}
              >
                <div
                  className="program-card"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={300}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "var(--theme)",
                        color: "#fff",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                      }}
                    >
                      {program.ageGroup}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "30px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="section-title mb-3">
                      <h3
                        style={{
                          fontSize: "28px",
                          fontWeight: "900",
                          marginBottom: "10px",
                          color: "#2c3e50",
                        }}
                      >
                        {program.title}
                      </h3>
                    </div>
                    <p
                      style={{  
                        color: "#7f8c8d",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        flexGrow: 1,
                      }}
                    >
                      {program.description}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        marginBottom: "25px",
                      }}
                    >
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            marginBottom: "10px",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <i
                            className="fa-solid fa-check-circle"
                            style={{
                              color: "var(--theme)",
                              marginRight: "10px",
                              marginTop: "3px",
                              fontSize: "16px",
                            }}
                          ></i>
                          <span style={{ color: "var(--theme)" }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/register"
                      className="theme-btn rounded-pill "
                      style={{
                        width: "100%",
                        textAlign: "center",
                        display: "inline-block",
                      }}
                    >
                      JOIN ACADEMY{" "}
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sponsor-section section-padding bg-cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2 className="text-black">
                  Ready to Start Your <span>Journey?</span>
                </h2>
                <p className="text-black mt-3">
                  Join Thunderbolts FC Academy and take the first step towards
                  your football dreams
                </p>
                <Link href="/register" className="theme-btn mt-4 rounded-pill">
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
