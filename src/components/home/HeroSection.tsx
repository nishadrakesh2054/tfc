import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section
      className="hero-section parallaxie hero-2"
      style={{
        backgroundImage: 'url("assets/img/home-2/hero/hero-bg.png")',
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        
      }}
    >
      <div className="vec-shape1">
        <Image
          src="assets/img/home-2/hero/vec-1.png"
          alt="img"
          width={100}
          height={100}
        />
      </div>
      <div className="vec-shape2">
        <Image
          src="assets/img/home-2/hero/vec-2.png"
          alt="img"
          width={200}
          height={200}
        />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4"></div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="hero-content">
           
              <div className="section-title mb-0 ">
                <h2
                  className="hero_title tv_hero_title hero_title_1 text-white"
                  style={{
                    fontSize: "clamp(40px, 8vw, 80px)",
                    fontWeight: "900",
                    lineHeight: "1.2",
                    letterSpacing: "2px",
                  }}
                >
                  Rise With &nbsp;<span>Thunder</span> <br />
                  Rise For &nbsp;<span>Nepali Football</span>
                </h2>
              </div>
              <div className="hero-btn wow fadeInUp" data-wow-delay=".5s">
                <Link href="/register" className="theme-btn ">
                  Join Academy <i className="fa-solid fa-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
