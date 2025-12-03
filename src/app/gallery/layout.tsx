import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery - TFC Moments",
  description:
    "Explore Thunderbolts Football Club's photo gallery featuring player action shots, championship celebrations, training sessions, and memorable moments. Browse 20+ photos of our team, victories, and behind-the-scenes moments.",
  keywords: [
    "TFC Gallery",
    "Thunderbolts Photos",
    "Football Photos Nepal",
    "TFC Players Photos",
    "Championship Photos",
    "Training Photos",
    "Football Gallery Nepal",
  ],
  openGraph: {
    title: "Photo Gallery - Thunderbolts FC Moments",
    description:
      "Explore our gallery featuring player action shots, championship celebrations, and training sessions.",
    url: "https://thunderboltsfc.com/gallery",
    images: ["/assets/img/gallery/g1.jpg"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
