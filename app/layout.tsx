import type { Metadata } from "next";
import { DM_Mono as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

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

export const revalidate = 600; // revalidate data every 10 minutes

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 right-0 left-0 h-[110px] -index-1 bg-background"></div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
