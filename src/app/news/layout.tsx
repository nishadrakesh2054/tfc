import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News & Updates",
  description:
    "Stay updated with the latest news from Thunderbolts Football Club. Read match highlights, player interviews, training updates, youth academy news, and championship stories. Your source for all TFC news.",
  keywords: [
    "TFC News",
    "Thunderbolts News",
    "Football News Nepal",
    "Match Highlights",
    "Player Interviews",
    "Youth Academy News",
    "Championship Updates",
    "Nepal Football News",
  ],
  openGraph: {
    title: "Latest News & Updates - Thunderbolts FC",
    description:
      "Stay updated with match highlights, player interviews, and latest news from Thunderbolts Football Club.",
    url: "https://thunderboltsfc.com/news",
    images: ["/assets/img/blog.png"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
