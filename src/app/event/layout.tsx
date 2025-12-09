import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Tournaments - Thunderbolts FC",
  description:
    "Join Thunderbolts FC events, tournaments, and coaching workshops. Stay updated with upcoming matches, training sessions, community events, and football competitions. Be part of the TFC community.",
  keywords: [
    "TFC Events",
    "Thunderbolts Tournaments",
    "Football Events Nepal",
    "Coaching Workshops",
    "Football Competitions",
    "TFC Matches",
    "Community Events",
    "Nepal Football Tournaments",
  ],
  openGraph: {
    title: "Events & Tournaments - Thunderbolts FC",
    description:
      "Join our events, tournaments, and coaching workshops. Be part of the Thunderbolts FC community.",
    url: "https://thunderboltsfc.com/event",
    images: ["/assets/img/blog.png"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/event",
  },
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
