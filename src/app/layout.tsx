import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TWP. Clinic | Premium Physiotherapy & Rehabilitation in Muscat, Oman",
  description: "Experience world-class physiotherapy and rehabilitation at TWP. Clinic in Muscat, Oman. We specialize in sports injury recovery, back pain treatment, and personalized care.",
  keywords: ["Physiotherapy in Muscat", "Rehabilitation Clinic Oman", "Back Pain Treatment Oman", "Sports Injury Physiotherapy", "TWP Clinic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased selection:bg-primary selection:text-white`}
    >
      <body className={`font-sans min-h-full flex flex-col bg-bg-primary text-dark`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
