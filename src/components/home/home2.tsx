// import Link from "next/link";
import { memo } from "react";

function Home2() {
  return (
    <>
      <style>{`
        .hero-section.hero-2 {
          min-height: clamp(400px, 75vh, 700px) !important;
          
        }
        @media (max-width: 1199px) {
          .hero-section.hero-2 {
            min-height: clamp(350px, 60vh, 600px) !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section.hero-2 {
         min-height: clamp(300px, 50vh, 350px) !important;
          }
        }
      `}</style>
      <section
        className="hero-section hero-2 mobile-bg-control"
        style={{
          backgroundImage: 'url("/assets/img/home-2/hero/homepic.png")',
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          overflow: "hidden",
        }}
      ></section>
    </>
  );
}

export default memo(Home2);
