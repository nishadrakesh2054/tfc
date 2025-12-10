"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getTestimonials, getImageUrl, Testimonial } from "@/lib/directus";
// Window types are defined in types/window.d.ts

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch testimonials
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Initialize Swiper after testimonials are loaded
  useEffect(() => {
    if (
      !loading &&
      testimonials.length > 0 &&
      typeof window !== "undefined" &&
      window.Swiper
    ) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (swiperContainerRef.current && !swiperRef.current && window.Swiper) {
          const Swiper = window.Swiper;
          swiperRef.current = new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: testimonials.length > 1,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
            speed: 800,
            effect: "slide",
            navigation: {
              nextEl: ".array-next",
              prevEl: ".array-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // Remove on callbacks to avoid React Compiler issues with 'this'
            // Animations are handled via CSS instead
          });
        }
      }, 300);

      return () => {
        clearTimeout(timer);
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true);
          swiperRef.current = null;
        }
      };
    }
  }, [loading, testimonials.length]);

  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/img/testimonial/testimonial-bg.jpg')",
        position: "relative",
      }}
    >
      <div className="testimonial-wrapper">
        <div className="container">
          <div className="row g-4">
            <div className="row g-4">
              <div className="col-lg-6">
                {loading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "300px",
                    }}
                  >
                    <div
                      className="testimonial-loader"
                      style={{
                        width: "50px",
                        height: "50px",
                        border: "4px solid rgba(254, 89, 0, 0.2)",
                        borderTop: "4px solid #FE5900",
                        borderRadius: "50%",
                        animation: "testimonial-spin 1s linear infinite",
                      }}
                    ></div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes testimonial-spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                        .testimonial-loader {
                          animation: testimonial-spin 1s linear infinite;
                        }
                      `,
                      }}
                    />
                  </div>
                ) : (
                  <div
                    ref={swiperContainerRef}
                    className="swiper testimonial-slider"
                  >
                    <div className="swiper-wrapper">
                      {testimonials && testimonials.length > 0 ? (
                        testimonials.map((testimonial) => (
                          <div key={testimonial.id} className="swiper-slide">
                            <div
                              className="testimonial-box-slider"
                              style={{
                                animation: "fadeInUp 0.6s ease-out",
                              }}
                            >
                              <div className="quote-icon">
                                <Image
                                  src="/assets/img/testimonial/quote.svg"
                                  alt="Quote Icon"
                                  width={50}
                                  height={50}
                                  loading="lazy"
                                />
                              </div>
                              <p
                                style={{ fontSize: "15px", lineHeight: "1.6" }}
                              >
                                {testimonial.message}
                              </p>
                              <div className="client-info-items">
                                <div className="client-info">
                                  {testimonial.image ? (
                                    <Image
                                      src={getImageUrl(testimonial.image)}
                                      alt={testimonial.name}
                                      width={60}
                                      height={60}
                                      style={{
                                        width: "60px",
                                        height: "60px",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                        transition: "transform 0.3s ease",
                                      }}
                                      loading="lazy"
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.1)";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                      }}
                                    />
                                  ) : (
                                    <Image
                                      src="/assets/img/testimonial/client.png"
                                      alt={testimonial.name}
                                      width={60}
                                      height={60}
                                      style={{ width: "auto", height: "60px" }}
                                      loading="lazy"
                                    />
                                  )}
                                  <div className="content">
                                    <h4
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      {testimonial.name}
                                    </h4>
                                    <span>{testimonial.role}</span>
                                  </div>
                                </div>
                                <div className="star">
                                  {[...Array(5)].map((_, index) => (
                                    <i
                                      key={index}
                                      className={`fa-solid fa-star ${
                                        index < testimonial.rating
                                          ? ""
                                          : "text-muted"
                                      }`}
                                      style={{
                                        color:
                                          index < testimonial.rating
                                            ? "var(--gold)"
                                            : "#ddd",
                                        transition: "all 0.3s ease",
                                        animation:
                                          index < testimonial.rating
                                            ? "starPop 0.5s ease"
                                            : "none",
                                        animationDelay: `${index * 0.1}s`,
                                      }}
                                    ></i>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        // Fallback testimonials if none from Directus
                        <div className="swiper-slide">
                          <div className="testimonial-box-slider">
                            <div className="quote-icon">
                              <Image
                                src="/assets/img/testimonial/quote.svg"
                                alt="Quote Icon"
                                width={50}
                                height={50}
                                loading="lazy"
                              />
                            </div>
                            <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                              Thunderbolts FC has given me the platform to grow
                              as a player. The coaching staff and facilities are
                              world-class!
                            </p>
                            <div className="client-info-items">
                              <div className="client-info">
                                <Image
                                  src="/assets/img/testimonial/client.png"
                                  alt="Default Member"
                                  width={60}
                                  height={60}
                                  style={{ width: "auto", height: "60px" }}
                                  loading="lazy"
                                />
                                <div className="content">
                                  <h4
                                    style={{
                                      fontSize: "16px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    Team Member
                                  </h4>
                                  <span>Player</span>
                                </div>
                              </div>
                              <div className="star">
                                <i
                                  className="fa-solid fa-star"
                                  style={{ color: "var(--gold)" }}
                                ></i>
                                <i
                                  className="fa-solid fa-star"
                                  style={{ color: "var(--gold)" }}
                                ></i>
                                <i
                                  className="fa-solid fa-star"
                                  style={{ color: "var(--gold)" }}
                                ></i>
                                <i
                                  className="fa-solid fa-star"
                                  style={{ color: "var(--gold)" }}
                                ></i>
                                <i
                                  className="fa-solid fa-star"
                                  style={{ color: "var(--gold)" }}
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Pagination dots */}
                    <div
                      className="swiper-pagination"
                      style={{ position: "relative", marginTop: "20px" }}
                    ></div>
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <div className="testimonial-right-items">
                  <div className="section-title">
                    <h6
                      className="wow fadeInUp"
                      style={{ color: "var(--gold)" }}
                    >
                      What Our Fans Say
                    </h6>
                    <h2
                      className="text-white hero_title tv_hero_title hero_title_1"
                      style={{ color: "var(--gold)" }}
                    >
                      Loved by Players,{" "}
                      <span style={{ color: "var(--gold)", border: "none" }}>
                        fans,
                      </span>{" "}
                      <br />
                      and families
                    </h2>
                  </div>
                  <div className="row g-4 align-items-start">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="testi-count">
                        <Image
                          src="/assets/img/testimonial/ratting-box.png"
                          alt="5 Star Rating"
                          width={200}
                          height={100}
                          style={{ width: "auto", height: "auto" }}
                          loading="lazy"
                        />
                      </div>
                      <div className="array-button d-flex align-items-center">
                        <button
                          className="array-prev"
                          style={{
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                            e.currentTarget.style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.opacity = "0.72";
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="24"
                            viewBox="0 0 20 24"
                            fill="none"
                          >
                            <g opacity="0.72">
                              <path
                                d="M15.814 19.4316C16.2646 19.8822 16.9952 19.8822 17.4458 19.4316C17.8964 18.981 17.8964 18.2504 17.4458 17.7998L16.6299 18.6157L15.814 19.4316ZM3.37029 4.20228C2.73304 4.20228 2.21644 4.71887 2.21644 5.35613L2.21644 15.7407C2.21644 16.378 2.73303 16.8946 3.37029 16.8946C4.00754 16.8946 4.52413 16.378 4.52413 15.7407V6.50997H13.7549C14.3922 6.50997 14.9087 5.99338 14.9087 5.35613C14.9087 4.71887 14.3922 4.20228 13.7549 4.20228L3.37029 4.20228ZM16.6299 18.6157L17.4458 17.7998L4.18618 4.54023L3.37029 5.35613L2.55439 6.17202L15.814 19.4316L16.6299 18.6157Z"
                                fill="#464E5E"
                              />
                            </g>
                          </svg>
                        </button>
                        <button
                          className="array-next"
                          style={{
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                            e.currentTarget.style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.opacity = "0.72";
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                          >
                            <g opacity="0.72">
                              <path
                                d="M4.56838 15.814C4.11778 16.2646 4.11778 16.9952 4.56838 17.4458C5.01899 17.8964 5.74956 17.8964 6.20017 17.4458L5.38428 16.6299L4.56838 15.814ZM19.7977 3.37029C19.7977 2.73304 19.2811 2.21644 18.6439 2.21644L8.25926 2.21644C7.62201 2.21644 7.10541 2.73303 7.10541 3.37029C7.10541 4.00754 7.62201 4.52413 8.25926 4.52413H17.49V13.7549C17.49 14.3922 18.0066 14.9087 18.6439 14.9087C19.2811 14.9087 19.7977 14.3922 19.7977 13.7549L19.7977 3.37029ZM5.38428 16.6299L6.20017 17.4458L19.4598 4.18618L18.6439 3.37029L17.828 2.55439L4.56838 15.814L5.38428 16.6299Z"
                                fill="#464E5E"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="testimonial-stats">
                        <h3 className="text-white mb-3">
                          Trusted by Thousands
                        </h3>
                        <p
                          className="text-white-50"
                          style={{ fontSize: "14px", lineHeight: "1.6" }}
                        >
                          Join our community of satisfied players and families
                          who have experienced excellence in football training.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starPop {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .testimonial-slider .swiper-slide {
          transition: opacity 0.5s ease-in-out;
        }

        .testimonial-slider .swiper-slide-active {
          opacity: 1 !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(254, 89, 0, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #fe5900;
          transform: scale(1.2);
        }

        .testimonial-box-slider {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-box-slider:hover {
          transform: translateY(-5px);
        }
        `,
        }}
      />
    </section>
  );
}
