import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulut Labs - Sürdürülebilir İyilik İçin Teknoloji",
  description: "Yenilikçi yazılım çözümleriyle kalıcı sosyal etki yaratan, teknolojinin gücünü toplumsal fayda için kullanan teknoloji şirketi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white relative`}>{children}</body>
    </html>
  );
}
