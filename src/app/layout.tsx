import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fontManager";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BgAnimation } from "@/components/Animation/BgAnimation";
import styles from "./Layout.module.css";

export const metadata: Metadata = {
  title: "柿木幹太のポートフォリオサイト",
  description:
    "柿木幹太 (Kanta Kakinoki) のポートフォリオサイト。宮崎大学大学院の学生で、ソフトウェアエンジニアの卵です。",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <Header />
        <div className={styles.position} id="pageTop"></div>
        {children}
        <BgAnimation />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
