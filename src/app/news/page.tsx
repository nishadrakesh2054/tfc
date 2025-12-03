"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

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

export default function News() {
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
                Blog Classic
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
              <li>Blog Classic</li>
            </ul>
          </div>
        </div>
      </div>

      {/* GT News-standard Section Start */}
      <section className="news-standard-section section-padding">
        <div className="container">
          <div className="gt-news-standard-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-8">
                <div className="gt-news-standard-items">
                  {/* News Card 1 */}
                  <div className="gt-news-card-items-4">
                    <div className="gt-news-image">
                      <Image
                        src="/assets/img/blog.png"
                        alt="Weekly Match Highlights"
                        width={800}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="gt-news-content">
                      <ul className="gt-date-list">
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          11 March 2025
                        </li>
                        <li>
                          <i className="fa-solid fa-comments"></i>
                          19 Comments
                        </li>
                      </ul>
                      <h3>
                        <Link href="/news-details">
                          From Kickoff to Final Whistle Weekly Match Highlights
                        </Link>
                      </h3>
                      <p>
                        Relive every thrilling moment from this week&apos;s
                        matches — from the opening kickoff to the final whistle,
                        with expert commentary, key plays, and unforgettable
                        highlights
                      </p>
                      <Link href="/news-details" className="theme-btn mt-4">
                        VIEW MORE <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>

                  {/* News Card 2 */}
                  <div className="gt-news-card-items-4">
                    <div className="gt-news-image">
                      <Image
                        src="/assets/img/blog.png"
                        alt="Road to Championship"
                        width={800}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="gt-news-content">
                      <ul className="gt-date-list">
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          11 March 2025
                        </li>
                        <li>
                          <i className="fa-solid fa-comments"></i>
                          19 Comments
                        </li>
                      </ul>
                      <h3>
                        <Link href="/news-details">
                          The Road to the Championship Season Diary
                        </Link>
                      </h3>
                      <p>
                        Follow our journey through the highs and lows of the
                        season, capturing every victory, setback, and defining
                        moment on the road to claiming the ultimate championship
                        glory.
                      </p>
                      <Link href="/news-details" className="theme-btn mt-4">
                        VIEW MORE <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>

                  {/* News Card 3 */}
                  <div className="gt-news-card-items-4 mb-0">
                    <div className="gt-news-image">
                      <Image
                        src="/assets/img/blog.png"
                        alt="Youth Academy Development"
                        width={800}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="gt-news-content">
                      <ul className="gt-date-list">
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          11 March 2025
                        </li>
                        <li>
                          <i className="fa-solid fa-comments"></i>
                          19 Comments
                        </li>
                      </ul>
                      <h3>
                        <Link href="/news-details">
                          Youth Academy Nurturing the Next Generation
                        </Link>
                      </h3>
                      <p>
                        Our Youth Academy is dedicated to developing future
                        football stars, providing top-tier coaching, essential
                        skills, and a strong foundation to nurture talent and
                        inspire
                      </p>
                      <Link href="/news-details" className="theme-btn mt-4">
                        VIEW MORE <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="page-nav-wrap text-center">
                    <ul>
                      <li>
                        <a className="page-numbers" href="#">
                          <i className="fa-solid fa-arrow-up-left"></i>
                        </a>
                      </li>
                      <li className="active">
                        <a className="page-numbers" href="#">
                          01
                        </a>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          02
                        </a>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          03
                        </a>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-12">
                <div className="gt-main-sideber sticky-style">
                  {/* Categories Widget */}
                  <div className="gt-single-sideber-widget">
                    <div className="gt-widget-title">
                      <h3>All Categories</h3>
                    </div>
                    <ul className="gt-category-list">
                      <li>
                        <Link href="/news-details">Player Interviews </Link>
                        <span>(08)</span>
                      </li>
                      <li>
                        <Link href="/news-details">Historic Moments</Link>
                        <span>(02)</span>
                      </li>
                      <li>
                        <Link href="/news-details">Training & Fitness</Link>
                        <span>(10)</span>
                      </li>
                      <li>
                        <Link href="/news-details">Legends of the Club </Link>
                        <span>(15)</span>
                      </li>
                      <li>
                        <Link href="/news-details">Match Highlights</Link>
                        <span>(12)</span>
                      </li>
                      <li>
                        <Link href="/news-details">Rivalries & Derbies </Link>
                        <span>(07)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Recent Posts Widget */}
                  <div className="gt-single-sideber-widget">
                    <div className="gt-widget-title">
                      <h3>Recent Post</h3>
                    </div>
                    <div className="gt-recent-post-area">
                      <div className="gt-recent-items">
                        <div className="gt-recent-thumb">
                          <Image
                            src="/assets/img/blogside.png"
                            alt="Legends of the Club"
                            width={80}
                            height={80}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="gt-recent-content">
                          <h5>
                            <Link href="/news-details">
                              Legends of the Club Honoring the Greats
                            </Link>
                          </h5>
                          <ul>
                            <li>March 26, 2025</li>
                          </ul>
                        </div>
                      </div>
                      <div className="gt-recent-items">
                        <div className="gt-recent-thumb">
                          <Image
                            src="/assets/img/blogside.png"
                            alt="Countdown to Final"
                            width={80}
                            height={80}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="gt-recent-content">
                          <h5>
                            <Link href="/news-details">
                              Countdown to the Final Build-Up & Expectations
                            </Link>
                          </h5>
                          <ul>
                            <li>March 26, 2025</li>
                          </ul>
                        </div>
                      </div>
                      <div className="gt-recent-items">
                        <div className="gt-recent-thumb">
                          <Image
                            src="/assets/img/blogside.png"
                            alt="Matchday Photo Gallery"
                            width={80}
                            height={80}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="gt-recent-content">
                          <h5>
                            <Link href="/news-details">
                              Matchday Photo Gallery and Capturing the Action
                            </Link>
                          </h5>
                          <ul>
                            <li>March 26, 2025</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Popular Tags Widget */}
                  <div className="gt-single-sideber-widget mb-0">
                    <div className="gt-widget-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link href="/news-details">MatchDay</Link>
                      <Link href="/news-details">FinalWhistle</Link>
                      <Link href="/news-details">Club</Link>
                      <Link href="/news-details">GlobalFootball</Link>
                      <Link href="/news-details">TacticalTalk</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section Start */}
      <Footer />
    </>
  );
}
