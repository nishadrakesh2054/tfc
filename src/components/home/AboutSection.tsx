import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

function AboutSection() {
  return (
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
              <h1
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
                Rise with <span style={{ color: "var(--theme)" }}>Thunder</span>
                <br />
                Rise for <span style={{ color: "var(--theme)" }}>Nepali Football</span>
              </h1>
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
          loading="lazy"
        />
      </div>
      <div className="right-shape">
        <Image
          src="/assets/img/home-1/about/right-shape.png"
          alt="Right Shape Decoration"
          width={200}
          height={400}
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
        />
      </div>
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInUp " data-wow-delay=".3s">
              <div className="about-image ">
              <Image
  src="/assets/img/tfc.png"
  alt="About Thunderbolts FC"
  width={530}
  height={500}
  style={{ width: "100%", height: "auto", objectFit: "contain" }}
  loading="lazy"
/>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
            
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    Built on{" "}
                    <span style={{  marginTop: "5px" }}>
                      passion.
                    </span>{" "}
                <br />
                    Driven by Unity.
                  </h2>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                  Founded with the spirit of teamwork and dedication, our
                  football club has grown into a symbol of pride, unity, and
                  excellence. We&apos;re committed to developing talent,
                  inspiring fans, and competing at the highest level.
                </p>

                <div
                  className="about-list-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Youth Development Programs
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Professional Training Facilities
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Award-Winning Coaching Staff
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      State-of-the-Art Training
                    </li>
                  </ul>
                </div>
                <Link
                  href="/about"
                  className="theme-btn wow fadeInUp rounded-pill"
                  data-wow-delay=".7s"
                >
                  MORE ABOUT US <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
