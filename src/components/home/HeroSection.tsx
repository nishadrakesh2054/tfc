import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="hero-section1 parallaxie hero-1 bg-cover"
      style={{ backgroundImage: "url('/assets/img/home-1/hero-bg.jpg')" }}
    >
      <div className="right-shape">
        <Image
          src="/assets/img/home-1/right-shape.png"
          alt="Right Shape Decoration"
          width={200}
          height={400}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h6 className="wow fadeInUp" style={{ fontSize: "16px" }}>
                Home of thunderboltsFC
              </h6>
              <h1
                className="hero_title tv_hero_title hero_title_1"
                style={{ fontSize: "clamp(42px, 5vw, 70px)" }}
              >
                The Heartbeat of <br />
                <span>Football</span> Lives Here
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ fontSize: "15px", lineHeight: "1.6" }}
              >
                Welcome to Thunderbolts FC — the powerhouse of football
                excellence. From elite training to rising talent, this is where
                commitment, passion, and the future of the game come alive.
              </p>
              <div className="hero-btn wow fadeInUp" data-wow-delay=".5s">
                <Link href="/team" className="theme-btn">
                  Join the Team <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <Image
                src="/assets/img/homegrp2.png"
                alt="Thunderbolts FC Hero"
                width={600}
                height={700}
                className="tilt_scale"
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <div className="hero-image-bg">
                <Image
                  src="/assets/img/homegrp2.png"
                  alt="Background"
                  width={600}
                  height={700}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
