"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

// Window types are defined in types/window.d.ts

export default function NewsDetails() {
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
                blog details
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
              <li>blog details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* GT News-standard Section Start */}
      <section className="news-standard-section section-padding">
        <div className="container">
          <div className="gt-news-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-8">
                <div className="gt-details-image">
                  <Image
                    src="/assets/img/blog.png"
                    alt="Legends of the Club Honoring the Greats"
                    width={800}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="gt-news-details-content">
                  <h3>Legends of the Club Honoring the Greats</h3>
                  <p>
                    The legends of the club are the foundation of its proud
                    history, showcasing unmatched talent, leadership, and
                    commitment. From unforgettable players to inspiring coaches,
                    their achievements have left an indelible mark on the
                    club&apos;s identity. Honoring these greats through retired
                  </p>
                  <div className="gt-sideber">
                    <h6 className="mb-0">
                      &quot;A fantastic tribute to the club&apos;s greatest
                      heroes! I loved how the blog highlighted not just the
                      legendary players but also the coaches and staff who
                      contributed.&quot;
                    </h6>
                  </div>
                  <h4 className="news-title">
                    01. Legendary Players Who Shaped the Club
                  </h4>
                  <p>
                    jerseys, Hall of Fame inductions, and special events keeps
                    their legacy alive, motivating fans and new generations to
                    carry forward the club&apos;s spirit and values.
                  </p>

                  <h4 className="news-title">
                    02. How the Club Honors Its Legends
                  </h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <h4 className="news-title">03. Retiring jersey numbers</h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <h4 className="news-title">
                    04. Statues or murals at the stadium
                  </h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <h4 className="news-title">05. Hall of Fame inductions</h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <h4 className="news-title">06. Culinary Exploration</h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <h4 className="news-title">
                    07. Special events and anniversary matches
                  </h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <h4 className="news-title">
                    08. Extended Stays & Workcations
                  </h4>
                  <p>
                    Custom-curated itineraries, room preferences remembered, and
                    private concierge services now set the standard for top-tier
                    comfort.
                  </p>

                  <div className="row g-4 mt-3">
                    <div className="col-lg-6">
                      <div className="gt-details-image">
                        <Image
                          src="/assets/img/blog.png"
                          alt="Club History Moment 1"
                          width={400}
                          height={300}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="gt-details-image">
                        <Image
                          src="/assets/img/blog.png"
                          alt="Club History Moment 2"
                          width={400}
                          height={300}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text">Ready for the Ride of a Lifetime?</h3>
                  <p>
                    No matter your skill level, these legendary motorcycle
                    routes offer unforgettable experiences. Pack your gear, fuel
                    up, and hit the open road
                  </p>
                  <div className="row gt-tag-share-wrap mt-4 mb-5">
                    <div className="col-lg-8 col-12">
                      <div className="tagcloud">
                        <span>Tags:</span>
                        <Link href="/news-details">MatchDay</Link>
                        <Link href="/news-details">FinalWhistle</Link>
                        <Link href="/news-details">Club</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <div className="social-share">
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="gt-comments-area">
                    <div className="gt-comments-heading">
                      <h3>02 Comments</h3>
                    </div>
                    <div className="gt-blog-single-comment d-flex gap-4 pt-4 pb-4">
                      <div className="image">
                        <Image
                          src="/assets/img/blogside.png"
                          alt="Comment User Avatar"
                          width={80}
                          height={80}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="gt-content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="con">
                            <h5>
                              <Link href="/news-details">Leslie Alexander</Link>
                            </h5>
                            <span>February 10, 2024 at 2:37 pm</span>
                          </div>
                          <Link href="/news-details" className="reply">
                            Reply
                          </Link>
                        </div>
                        <p className="mt-30 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                      </div>
                    </div>
                    <div className="gt-blog-single-comment d-flex gap-4 pt-4 pb-4">
                      <div className="image">
                        <Image
                          src="/assets/img/blogside.png"
                          alt="Comment User Avatar"
                          width={80}
                          height={80}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="gt-content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="con">
                            <h5>
                              <Link href="/news-details">Joseph Michael</Link>
                            </h5>
                            <span>February 10, 2024 at 2:37 pm</span>
                          </div>
                          <Link href="/news-details" className="reply">
                            Reply
                          </Link>
                        </div>
                        <p className="mt-30 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gt-comment-form-wrap pt-5">
                    <h3>Leave a comments</h3>
                    <form action="#" id="contact-form" method="POST">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="form-clt">
                            <span>Your Name*</span>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-clt">
                            <span>Your Email*</span>
                            <input
                              type="text"
                              name="email"
                              id="email6"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <span>Message*</span>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Type your message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <button className="theme-btn" type="submit">
                            SEND MESSAGE
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
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
