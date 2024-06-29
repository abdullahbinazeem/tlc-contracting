import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Phone } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLC Contracting Inc.",
  description:
    "TLC Contracting Inc. is your trusted partner for high-quality home repairs and renovations. Our expert team specializes in a wide range of services, including tiling, carpentry, flooring, painting, plumbing, and drywall. With a commitment to excellence and attention to detail, we transform spaces to meet your needs and exceed your expectations. Discover the TLC difference and let us bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
