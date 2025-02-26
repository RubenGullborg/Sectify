import type { Metadata } from "next";
import { Zen_Dots } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
//import Sidebar from "@/components/Layout/Sidebar";
import Footer from "@/components/Layout/Footer";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  variable: "--font-dosis",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sectify",
  description: "Start creating beautiful sections with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zenDots.variable} antialiased font-zenDots`}>
        <Header />

        <main className="">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
