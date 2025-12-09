import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import SponsorSection from "@/components/home/SponsorSection";
import StructuredData from "@/components/StructuredData";
import ClientInit from "@/components/ClientInit";
import Home2 from "@/components/home/home2";

export default async function Home() {
  return (
    <>
      <StructuredData />
      <ClientInit />

      {/* Preloader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="T" className="letters-loading">
              {" "}
              T{" "}
            </span>
            <span data-text-preloader="F" className="letters-loading">
              {" "}
              F{" "}
            </span>
            <span data-text-preloader="C" className="letters-loading">
              {" "}
              C{" "}
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Back To Top Start */}
      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>

      {/* MouseCursor Start */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      <Header />

      {/* <HeroSection /> */}
      <Home2 />

      <AboutSection />

      {/* Team Section Start */}
      <TeamSection />

      <TestimonialSection />

      <SponsorSection />

      <Footer />
    </>
  );
}
