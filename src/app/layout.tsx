import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
//import Sidebar from "@/components/Layout/Sidebar";
import Footer from "@/components/Layout/Footer";

const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      <body className={`${dosis.variable} antialiased font-dosis`}>
        <Header />
        
          <main className="">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
