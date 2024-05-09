import type { Metadata } from "next";
import { DM_Mono as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const fontSans = FontSans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joyce Shi",
  description:
    "Joyce Shi / joyceshi / designer / graphic design / Joyce Shi design / brand designer / art direction / designer based in New York / G Axis Press",
  icons: {
    icon: "/icon.svg",
  },
};

export const revalidate = 1800; // revalidate data every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ScrollToTop />
      <body
        className={cn("px-4 pt-4 sm:px-[10px] sm:pt-[9px]", fontSans.className)}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
