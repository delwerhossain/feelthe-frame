import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Feel The Frame - Professional Video Production",
  description: "Experience premium video production services. From concept to creation, we optimize your marketing with video content that drives results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${poppins.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
