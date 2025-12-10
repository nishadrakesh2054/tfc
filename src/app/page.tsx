import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ClientInit from "@/components/ClientInit";
import Preloader from "@/components/Preloader";
import Home2 from "@/components/home/home2";

// Lazy load components below the fold for better initial load performance
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const TeamSection = dynamic(() => import("@/components/home/TeamSection"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const TestimonialSection = dynamic(
  () => import("@/components/home/TestimonialSection"),
  {
    loading: () => <div style={{ minHeight: "200px" }} />,
  }
);
const SponsorSection = dynamic(
  () => import("@/components/home/SponsorSection"),
  {
    loading: () => <div style={{ minHeight: "200px" }} />,
  }
);

export default async function Home() {
  return (
    <>
      <StructuredData />
      <ClientInit />
      <Preloader />
      <Header />
      <Home2 />
      <AboutSection />
      <TeamSection />
      <TestimonialSection />
      <SponsorSection />
      <Footer />
    </>
  );
}
