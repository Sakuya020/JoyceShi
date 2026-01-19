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
    "Joyce Shi is a concept-driven, award-winning design director based in New York. She is the founder of publication practice G Axis Press and design studio Function Lab, with work featured globally in bookstores, galleries, and institutions including the Thomas J. Watson Library at the MET.
  ",
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
