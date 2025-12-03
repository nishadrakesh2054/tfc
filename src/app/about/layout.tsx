import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Mission, Vision & Values",
  description:
    "Learn about Thunderbolts Football Club's mission to develop elite talent, our vision for football excellence in Nepal, and the core values that drive our success. Discover our objectives, achievements, and commitment to the beautiful game.",
  keywords: [
    "About Thunderbolts FC",
    "TFC Mission",
    "TFC Vision",
    "Football Club Nepal",
    "TFC Values",
    "Football Excellence Nepal",
    "Youth Development",
    "Football Academy Nepal",
  ],
  openGraph: {
    title: "About Thunderbolts FC - Mission, Vision & Values",
    description:
      "Discover the story of Thunderbolts FC - our mission to develop elite talent, vision for excellence, and commitment to Nepali football.",
    url: "https://thunderboltsfc.com/about",
    images: ["/assets/img/aboutmiddle.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Thunderbolts FC - Mission, Vision & Values",
    description:
      "Discover the story of Thunderbolts FC - our mission to develop elite talent and vision for excellence.",
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
