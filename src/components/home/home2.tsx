// import Link from "next/link";

export default function Home2() {
  return (
    <>
      <style>{`
        .hero-section.hero-2 {
          min-height: clamp(400px, 75vh, 800px) !important;
        }
        @media (max-width: 1199px) {
          .hero-section.hero-2 {
            min-height: clamp(350px, 60vh, 600px) !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section.hero-2 {
            min-height: clamp(300px, 50vh, 500px) !important;
          }
        }
      `}</style>
      <section
        className="hero-section hero-2"
        style={{
          backgroundImage: 'url("/assets/img/home-2/hero/hm2.png")',
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        //   width: "100%",
          overflow: "hidden",
        }}
      ></section>
    </>
  );
}
