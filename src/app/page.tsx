"use client";

import ImageSlider from "@/components/ImageSlider";
import AboutSection from "@/components/AboutSection";

import PlayerSec from "@/components/PlayerSec";
import GallerySec from "@/components/Gallerysec";
import ConatctSec from "@/components/ContactSec";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Slider Section */}
      <section id="home">
        <ImageSlider />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Players Section */}
      <PlayerSec />
      {/* Gallery Section */}
      <GallerySec />

      {/* Contact Section */}
      <ConatctSec />
    </div>
  );
}
