import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Thunderbolts Football Club. Visit us at Dhapakhel, Lalitpur, Nepal. Call +977 980 197 3975 or email info@thunderbolts.com.np. We're here to answer your questions about memberships, training, and more.",
  keywords: [
    "Contact TFC",
    "Thunderbolts FC Contact",
    "Football Club Nepal Contact",
    "TFC Location",
    "Dhapakhel Football",
    "TFC Phone Number",
    "TFC Email",
  ],
  openGraph: {
    title: "Contact Thunderbolts FC - Get in Touch",
    description:
      "Contact Thunderbolts Football Club in Lalitpur, Nepal. Phone: +977 980 197 3975 | Email: info@thunderbolts.com.np",
    url: "https://thunderboltsfc.com/contact",
  },
  alternates: {
    canonical: "https://thunderboltsfc.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
