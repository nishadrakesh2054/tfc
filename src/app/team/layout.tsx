import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Meet TFC Players",
  description:
    "Meet the talented players of Thunderbolts Football Club. View player profiles, statistics, positions, and achievements. Our squad includes skilled forwards, midfielders, defenders, and goalkeepers committed to excellence.",
  keywords: [
    "TFC Players",
    "Thunderbolts Team",
    "Football Players Nepal",
    "TFC Squad",
    "Player Statistics",
    "Football Roster Nepal",
    "Bipul Shrestha",
    "TFC Athletes",
  ],
  openGraph: {
    title: "Our Team - Meet Thunderbolts FC Players",
    description:
      "Meet our talented squad of players, their statistics, and achievements at Thunderbolts Football Club.",
    url: "https://thunderboltsfc.com/team",
    images: ["/assets/img/bipul.png"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
