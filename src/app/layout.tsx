import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ecopoly Biotech LLP",
  description: "The Future of Sustainable Biomaterials",
};


const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${notoSans.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
