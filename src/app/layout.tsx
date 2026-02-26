import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MNV — Takuro Yoshio Portfolio",
  description:
    "吉尾拓朗のポートフォリオサイト。Webサイト制作、ポートフォリオ制作、HP制作を承っております。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
