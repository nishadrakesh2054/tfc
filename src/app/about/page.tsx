"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";

// Window types are defined in types/window.d.ts

interface Objective {
  id: number;
  icon: string;
  title: string;
  description: string;
  delay: string;
}

interface CoreValue {
  id: number;
  title: string;
  description: string;
  delay: string;
}

interface Aspiration {
  id: number;
  title: string;
  description: string;
}

interface Trophy {
  id: number;
  image: string;
  alt: string;
  title: string;
  year: string;
  delay: string;
}

const objectives: Objective[] = [
  {
    id: 1,
    icon: "fa-solid fa-futbol",
    title: "Strong Football Academy",
    description:
      "Establish a structured training program to identify, nurture, and develop young talents for both football and futsal under TDC.",
    delay: ".3s",
  },
  {
    id: 2,
    icon: "fa-solid fa-users",
    title: "Youth Development",
    description:
      "Provide a robust platform for aspiring footballers to grow, learn, and seamlessly transition into professional careers within the sport.",
    delay: ".4s",
  },
  {
    id: 3,
    icon: "fa-solid fa-trophy",
    title: "Competitive Performance",
    description:
      "Implement cutting-edge training methodologies and tactical strategies to strengthen the squad and ensure sustained success.",
    delay: ".5s",
  },
  {
    id: 4,
    icon: "fa-solid fa-chart-line",
    title: "Sustainable Club Model",
    description:
      "Focus on financial stability, diversified revenue streams, and strong community support to create a resilient institution.",
    delay: ".6s",
  },
  {
    id: 5,
    icon: "fa-solid fa-handshake",
    title: "Team Spirit & Sportsmanship",
    description:
      "Encourage and uphold values of discipline, teamwork, and integrity both on and off the pitch.",
    delay: ".7s",
  },
  {
    id: 6,
    icon: "fa-solid fa-globe",
    title: "Expand Recognition",
    description:
      "Enhance brand visibility through media presence, fan engagement, and participation in prestigious tournaments.",
    delay: ".8s",
  },
];

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Excellence",
    description:
      "Striving for the highest standards in training, performance, and management, ensuring continual growth and development.",
    delay: ".3s",
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "Upholding fairness, transparency, and ethical conduct in all operations, fostering trust and respect.",
    delay: ".4s",
  },
  {
    id: 3,
    title: "Passion",
    description:
      "Encouraging a deep love for the game and unwavering commitment to growth and success.",
    delay: ".5s",
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "Continuously evolving our training techniques and strategies to maintain a competitive edge.",
    delay: ".6s",
  },
];

const aspirations: Aspiration[] = [
  {
    id: 1,
    title: "Homegrown Talent Pipeline",
    description:
      "Establish a robust pipeline through our football and futsal academy, ensuring a steady influx of skilled players.",
  },
  {
    id: 2,
    title: "International Recognition",
    description:
      "Expand our reach by participating in nationally and internationally recognized tournaments.",
  },
  {
    id: 3,
    title: "State-of-the-Art Facilities",
    description:
      "Develop world-class training facilities for player development and high-performance training.",
  },
  {
    id: 4,
    title: "Strategic Partnerships",
    description:
      "Forge partnerships with sponsors, football organizations, and educational institutions to strengthen our network.",
  },
  {
    id: 5,
    title: "Inspire the Next Generation",
    description:
      "Set new benchmarks for success and remain a beacon of footballing excellence and ambition.",
  },
  {
    id: 6,
    title: "Community Engagement",
    description:
      "Build strong relationships with fans, supporters, and local stakeholders.",
  },
];

const trophies: Trophy[] = [
  {
    id: 1,
    image: "/assets/img/inner/trophy1.png",
    alt: "NSFL Trophy",
    title: "NSFL",
    year: "2025",
    delay: ".2s",
  },
  {
    id: 2,
    image: "/assets/img/inner/trophy2.png",
    alt: "Thunderbolts Cup Trophy",
    title: "Thunderbolts Cup",
    year: "2025",
    delay: ".4s",
  },
  {
    id: 3,
    image: "/assets/img/inner/trophy3.png",
    alt: "ANFA Trophy",
    title: "ANFA",
    year: "2021",
    delay: ".6s",
  },
  {
    id: 4,
    image: "/assets/img/inner/trophy4.png",
    alt: "Nepal Super League Trophy",
    title: "Nepal Super League",
    year: "2023",
    delay: ".8s",
  },
];

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
      <Preloader />

      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="about us" />

      {/* About Section */}
      <section className="about-section fix ">
        {/* Quote Section - Center of Screen */}
        <style>{`
        .quote-text-responsive {
          font-size: clamp(28px, 5.5vw, 60px);
        }
        @media (min-width: 768px) and (max-width: 1199px) {
          .quote-text-responsive {
            font-size: clamp(32px, 4vw, 48px) !important;
          }
        }
        @media (min-width: 1200px) {
          .quote-text-responsive {
            font-size: clamp(40px, 5vw, 60px) !important;
          }
        }
      `}</style>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title text-center wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  padding: "40px 20px",
                  marginBottom: "30px",
                }}
              >
                <h2
                  className="quote-text hero_title tv_hero_title hero_title_1 quote-text-responsive"
                  style={{
                    fontWeight: "900",
                    lineHeight: "1.2",
                    color: "#2c3e50",
                    textTransform: "uppercase",
                    letterSpacing: "clamp(1px, 0.2vw, 2px)",
                    wordBreak: "break-word",
                  }}
                >
                  Rise with <span>Thunder</span>
                  <br />
                  Rise for <span>Nepali Football</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

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
        <div className=" about-image-wrapper">
          <div className="about-image-fill">
            <Image
              src="/assets/img/about1.png"
              alt="about"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section fix section-padding">
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
      <section className="about-section fix section-padding  ">
        <div className="container">
          <div className="section-title text-start">
            <h6 className="wow fadeInUp">STRATEGIC GOALS</h6>
            <h2
              className="hero_title tv_hero_title hero_title_1 wow fadeInUp text-start"
              data-wow-delay=".2s"
            >
              Our <span>Objectives</span>
            </h2>
          </div>
          <div className="row g-4 mt-3">
            {objectives.map((objective) => (
              <div
                key={objective.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={objective.delay}
              >
                <div className="about-content text-center">
                  <div className="icon mb-3">
                    <i
                      className={objective.icon}
                      style={{ fontSize: "48px", color: "var(--theme)" }}
                    ></i>
                  </div>
                  <h4 style={{ color: "var(--theme)" }}>{objective.title}</h4>
                  <p>{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="section-title">
            <h6 className="wow fadeInUp">OUR FOUNDATION</h6>
            <h2
              className="hero_title tv_hero_title hero_title_1 wow fadeInUp "
              data-wow-delay=".2s"
            >
              Core <span>Values</span>
            </h2>
          </div>
          <div className="row g-4 mt-3">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={value.delay}
              >
                <div
                  className="about-content text-center p-4 h-100 d-flex flex-column"
                  style={{
                    border: "2px solid var(--theme)",
                    borderRadius: "10px",
                    minHeight: "220px",
                  }}
                >
                  <h4 style={{ color: "var(--theme)" }}>{value.title}</h4>
                  <p className="flex-grow-1 d-flex align-items-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Aspirations Section */}
      <section className="about-section fix section-padding ">
        <div className="container">
          <div className="section-title text-start">
            <h6 className="wow fadeInUp">LOOKING AHEAD</h6>
            <h2
              className="hero_title tv_hero_title hero_title_1 wow fadeInUp text-start"
              data-wow-delay=".2s"
            >
              Future <span>Aspirations</span>
            </h2>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-list-items">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {aspirations.slice(0, 3).map((aspiration) => (
                    <li key={aspiration.id} style={{ marginBottom: "20px" }}>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "var(--theme)", marginRight: "10px" }}
                      ></i>
                      <strong>{aspiration.title}:</strong>{" "}
                      {aspiration.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-list-items">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {aspirations.slice(3, 6).map((aspiration) => (
                    <li key={aspiration.id} style={{ marginBottom: "20px" }}>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "var(--theme)", marginRight: "10px" }}
                      ></i>
                      <strong>{aspiration.title}:</strong>{" "}
                      {aspiration.description}
                    </li>
                  ))}
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
      <section className="trophy-section section-padding ">
        <div className="container">
          <div className="row g-4">
            {trophies.map((trophy) => (
              <div
                key={trophy.id}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={trophy.delay}
              >
                <div className="trophy-box-item">
                  <Image
                    src={trophy.image}
                    alt={trophy.alt}
                    width={150}
                    height={200}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="content">
                    <h3>{trophy.title}</h3>
                    <span>{trophy.year}</span>
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
