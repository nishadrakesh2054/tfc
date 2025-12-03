import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bipul Shrestha - Player Profile",
  description:
    "Meet Bipul Shrestha (#07), Forward for Thunderbolts FC. Born March 15, 1995 in Nepal. View his biography, statistics, achievements, and trophies. 106 appearances, 29 goals, 35 assists.",
  keywords: [
    "Bipul Shrestha",
    "TFC Player",
    "Football Player Nepal",
    "Forward TFC",
    "Player Profile",
    "TFC #07",
    "Nepal Footballer",
  ],
  openGraph: {
    title: "Bipul Shrestha - Player Profile | Thunderbolts FC",
    description:
      "Meet Bipul Shrestha (#07), talented Forward for Thunderbolts FC. 106 appearances, 29 goals, 35 assists.",
    url: "https://thunderboltsfc.com/team-details",
    images: ["/assets/img/bipul.png"],
    type: "profile",
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/team-details",
  },
};

export default function TeamDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
