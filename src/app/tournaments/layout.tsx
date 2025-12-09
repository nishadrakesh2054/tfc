import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournaments - Thunderbolts FC",
  description:
    "Join Thunderbolts FC tournaments and competitions. Stay updated with upcoming football tournaments, youth competitions, and championship events. Compete and excel with TFC.",
  keywords: [
    "TFC Tournaments",
    "Football Tournaments Nepal",
    "Thunderbolts Competitions",
    "Football Championships",
    "Nepal Football Tournaments",
    "TFC Youth Tournaments",
    "Football Competitions",
  ],
  openGraph: {
    title: "Tournaments - Thunderbolts FC",
    description:
      "Join our football tournaments and competitions. Compete and excel with Thunderbolts FC.",
    url: "https://thunderboltsfc.com/tournaments",
    images: ["/assets/img/blog.png"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/tournaments",
  },
};

export default function TournamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
