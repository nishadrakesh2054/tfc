import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching Workshops - Thunderbolts FC",
  description:
    "Join Thunderbolts FC coaching workshops and training programs. Learn advanced football techniques, coaching methodologies, and player development strategies from expert coaches.",
  keywords: [
    "TFC Workshops",
    "Football Coaching Workshops",
    "Thunderbolts Training",
    "Football Coaching Nepal",
    "TFC Coaching Programs",
    "Football Training Workshops",
    "Coaching Education",
  ],
  openGraph: {
    title: "Coaching Workshops - Thunderbolts FC",
    description:
      "Learn from expert coaches. Join our professional coaching workshops and training programs.",
    url: "https://thunderboltsfc.com/workshops",
    images: ["/assets/img/blog.png"],
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/workshops",
  },
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
