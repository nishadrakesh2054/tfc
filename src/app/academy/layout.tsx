import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Academy - Thunderbolts FC",
  description:
    "Join Thunderbolts FC Youth Academy. Professional football training for young players, developing skills, character, and passion for the game. Expert coaching, modern facilities, and pathways to professional football.",
  keywords: [
    "TFC Academy",
    "Youth Football Training",
    "Football Academy Nepal",
    "Youth Development",
    "Football Training Nepal",
    "TFC Youth Program",
    "Junior Football",
    "Nepal Football Academy",
  ],
  openGraph: {
    title: "Youth Academy - Thunderbolts FC",
    description:
      "Professional football training for young players. Develop skills, character, and passion for the game at TFC Academy.",
    url: "https://thunderboltsfc.com/academy",
    images: ["/assets/img/bipul.png"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/academy",
  },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
