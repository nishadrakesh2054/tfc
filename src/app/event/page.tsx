"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb";

// Window types are defined in types/window.d.ts

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: "tournament" | "workshop" | "match" | "community";
  image: string;
  description: string;
  status: "upcoming" | "ongoing" | "completed";
}

export default function Event() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    if (window.WOW) new window.WOW().init();
  }, []);

  const events: Event[] = [
    {
      id: 1,
      title: "Nepal Premier League 2025",
      date: "15 March 2025",
      location: "Dasharath Stadium, Kathmandu",
      category: "tournament",
      image: "/assets/img/blog.png",
      description:
        "Join us for the premier football tournament of the year. Watch Thunderbolts FC compete against top teams in Nepal. Experience thrilling matches, passionate fans, and unforgettable moments.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Advanced Coaching Workshop",
      date: "22 March 2025",
      location: "TFC Training Ground, Lalitpur",
      category: "workshop",
      image: "/assets/img/blog.png",
      description:
        "Professional coaching workshop for aspiring coaches and players. Learn advanced tactics, training methodologies, and modern football techniques from our expert coaching staff.",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Community Football Day",
      date: "28 March 2025",
      location: "Dhapakhel Ground, Lalitpur",
      category: "community",
      image: "/assets/img/blog.png",
      description:
        "A fun-filled community event bringing together football enthusiasts of all ages. Join us for friendly matches, skill competitions, and meet our players. Free entry for all!",
      status: "upcoming",
    },
    {
      id: 4,
      title: "TFC vs Kathmandu United",
      date: "05 April 2025",
      location: "ANFA Complex, Satdobato",
      category: "match",
      image: "/assets/img/blog.png",
      description:
        "Don't miss this exciting league match as Thunderbolts FC takes on Kathmandu United. Support your team and witness top-tier football action live at the stadium.",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Youth Development Tournament",
      date: "12 April 2025",
      location: "TFC Academy Ground",
      category: "tournament",
      image: "/assets/img/blog.png",
      description:
        "Our annual youth tournament showcasing the future stars of Nepali football. Watch talented young players compete and develop their skills in a competitive environment.",
      status: "upcoming",
    },
    {
      id: 6,
      title: "Goalkeeper Training Workshop",
      date: "18 April 2025",
      location: "TFC Training Ground, Lalitpur",
      category: "workshop",
      image: "/assets/img/blog.png",
      description:
        "Specialized training workshop for goalkeepers. Learn advanced techniques, positioning, and shot-stopping skills from professional goalkeeping coaches.",
      status: "upcoming",
    },
    {
      id: 7,
      title: "TFC vs Three Star Club",
      date: "25 April 2025",
      location: "Dasharath Stadium, Kathmandu",
      category: "match",
      image: "/assets/img/blog.png",
      description:
        "A crucial league encounter against Three Star Club. Come support Thunderbolts FC as we battle for three important points in this highly anticipated match.",
      status: "upcoming",
    },
    {
      id: 8,
      title: "Football Skills Camp",
      date: "02 May 2025",
      location: "TFC Academy Ground",
      category: "workshop",
      image: "/assets/img/blog.png",
      description:
        "Comprehensive skills development camp for players of all levels. Improve your dribbling, passing, shooting, and tactical awareness with expert guidance.",
      status: "upcoming",
    },
  ];

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "tournament":
        return "Tournament";
      case "workshop":
        return "Workshop";
      case "match":
        return "Match";
      case "community":
        return "Community";
      default:
        return category;
    }
  };

  return (
    <>
      <Preloader />

      <Header />

      <Breadcrumb
        title="Events & Tournaments"
        items={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      {/* Events Section Start */}
      <section className="news-standard-section section-padding">
        <div className="container">
          <div className="gt-news-standard-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-8">
                <div className="gt-news-standard-items">
                  {events.map((event, index) => (
                    <div
                      key={event.id}
                      className={`gt-news-card-items-4 ${
                        index === events.length - 1 ? "mb-0" : ""
                      }`}
                    >
                      <div
                        className="gt-news-image"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={800}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div
                          className="event-category-badge"
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            backgroundColor: "var(--theme)",
                            color: "#fff",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            zIndex: 10,
                          }}
                        >
                          {getCategoryLabel(event.category)}
                        </div>
                      </div>
                      <div className="gt-news-content">
                        <ul className="gt-date-list">
                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            {event.date}
                          </li>
                          <li>
                            <i className="fa-solid fa-map-marker-alt"></i>
                            {event.location}
                          </li>
                          <li>
                            <i className="fa-solid fa-clock"></i>
                            {event.status === "upcoming"
                              ? "Upcoming"
                              : event.status === "ongoing"
                              ? "Ongoing"
                              : "Completed"}
                          </li>
                        </ul>
                        <h3>
                          <Link href={`/event/${event.id}`}>{event.title}</Link>
                        </h3>
                        <p>{event.description}</p>
                        <Link
                          href={`/event/${event.id}`}
                          className="theme-btn mt-4 rounded-pill"
                        >
                          VIEW DETAILS{" "}
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                  ))}

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
                  {/* Upcoming Events Widget */}
                  <div className="gt-single-sideber-widget">
                    <div className="gt-widget-title">
                      <h3>Upcoming Events</h3>
                    </div>
                    <div className="gt-recent-post-area">
                      {events
                        .filter((e) => e.status === "upcoming")
                        .slice(0, 3)
                        .map((event) => (
                          <div key={event.id} className="gt-recent-items">
                            <div className="gt-recent-thumb">
                              <Image
                                src={event.image}
                                alt={event.title}
                                width={80}
                                height={80}
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="gt-recent-content">
                              <h5>
                                <Link href={`/event/${event.id}`}>
                                  {event.title}
                                </Link>
                              </h5>
                              <ul>
                                <li>{event.date}</li>
                              </ul>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Event Categories Widget */}
                  <div className="gt-single-sideber-widget">
                    <div className="gt-widget-title">
                      <h3>Event Categories</h3>
                    </div>
                    <ul className="gt-category-list">
                      <li>
                        <Link href="/event?category=tournament">
                          Tournaments
                        </Link>
                        <span>
                          (
                          {
                            events.filter((e) => e.category === "tournament")
                              .length
                          }
                          )
                        </span>
                      </li>
                      <li>
                        <Link href="/event?category=workshop">Workshops</Link>
                        <span>
                          (
                          {
                            events.filter((e) => e.category === "workshop")
                              .length
                          }
                          )
                        </span>
                      </li>
                      <li>
                        <Link href="/event?category=match">Matches</Link>
                        <span>
                          ({events.filter((e) => e.category === "match").length}
                          )
                        </span>
                      </li>
                      <li>
                        <Link href="/event?category=community">
                          Community Events
                        </Link>
                        <span>
                          (
                          {
                            events.filter((e) => e.category === "community")
                              .length
                          }
                          )
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Popular Tags Widget */}
                  <div className="gt-single-sideber-widget mb-0">
                    <div className="gt-widget-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link href="/event">Tournament</Link>
                      <Link href="/event">Workshop</Link>
                      <Link href="/event">MatchDay</Link>
                      <Link href="/event">Training</Link>
                      <Link href="/event">Community</Link>
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
