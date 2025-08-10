import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";

export const metadata: Metadata = {
  title: "Jupiter Japan - Solana最高のDEXアグリゲーター",
  description: "Jupiter ExchangeはSolanaブロックチェーン上で最高の価格とルーティングを提供するDEXアグリゲーター。日本語版開発者ドキュメント。",
  keywords: "Jupiter, Solana, DEX, DeFi, 暗号資産, 仮想通貨, スワップ, API",
  openGraph: {
    title: "Jupiter Japan - Solana最高のDEXアグリゲーター",
    description: "Jupiter ExchangeはSolanaブロックチェーン上で最高の価格とルーティングを提供するDEXアグリゲーター",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <FloatingOrbs />
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
