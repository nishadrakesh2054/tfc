
"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function FontWrapper({ children }: { children: React.ReactNode }) {
  return <div className={`${poppins.variable} font-sans antialiased`}>{children}</div>;
}