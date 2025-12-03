import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legends of the Club - Honoring the Greats",
  description:
    "Read about the legends of Thunderbolts Football Club and how we honor our greatest players, coaches, and contributors through retired jerseys, Hall of Fame inductions, statues, and special events.",
  keywords: [
    "TFC Legends",
    "Club History",
    "Football Legends Nepal",
    "Hall of Fame",
    "Retired Jerseys",
    "TFC Heroes",
    "Club Greats",
  ],
  openGraph: {
    title: "Legends of the Club - Honoring the Greats | Thunderbolts FC",
    description:
      "Discover the legends of Thunderbolts FC and how we celebrate their achievements and contributions.",
    url: "https://thunderboltsfc.com/news-details",
    images: ["/assets/img/blog.png"],
    type: "article",
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/news-details",
  },
};

export default function NewsDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
