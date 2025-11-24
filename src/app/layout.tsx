// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

// export const metadata: Metadata = {
//   title: "TFC - The Football Club",
//   description: "The Future of Football - TFC Official Website",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${poppins.variable} font-sans antialiased flex flex-col min-h-screen`}
//       >
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// app/layout.tsx



import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TFC - Thunderbolts Football Club",
  description: "The Future of Football - TFC Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 font-sans antialiased">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


// app/layout.tsx
// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import FontWrapper from "@/components/FontWrapper";

// export const metadata: Metadata = {
//   title: "TFC - Thunderbolts Football Club",
//   description: "The Future of Football - TFC Official Website",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       {/* No font class on <body> → no cz-shortcut-listen → no hydration error */}
//       <body className="flex flex-col min-h-screen bg-gray-900">
//         <FontWrapper>
//           <Header />
//           <main className="flex-1">
//             {children}
//           </main>
//           <Footer />
//         </FontWrapper>
//       </body>
//     </html>
//   );
// }