import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";
import "../styles/globals.css";

const dmSans = DMSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoldCard",
  description: "Generated by GoldCard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-zinc-900">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
