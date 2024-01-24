import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fontManager";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BgAnimation } from "@/components/Animation/BgAnimation";
import styles from "./Layout.module.css";
import { Suspense } from "react";
import { Screen } from "./_loading/Screen";
import { Loading } from "./_loading/Loading";

export const metadata: Metadata = {
  title: "柿木幹太のポートフォリオサイト",
  description:
    "柿木幹太 (Kanta Kakinoki) のポートフォリオサイト。宮崎大学大学院の学生で、ソフトウェアエンジニアの卵です。",
  openGraph: {
    title: "柿木幹太のポートフォリオサイト",
    description:
      "柿木幹太 (Kanta Kakinoki) のポートフォリオサイト。宮崎大学大学院の学生で、ソフトウェアエンジニアの卵です。",
  },
  twitter: {
    title: "柿木幹太のポートフォリオサイト",
    description:
      "柿木幹太 (Kanta Kakinoki) のポートフォリオサイト。宮崎大学大学院の学生で、ソフトウェアエンジニアの卵です。",
    card: "summary_large_image",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Suspense fallback={<Screen />}>
          <Loading>
            <Screen />
          </Loading>
          <Header />
          <div className={styles.position} id="pageTop"></div>
          {children}
          <BgAnimation />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
