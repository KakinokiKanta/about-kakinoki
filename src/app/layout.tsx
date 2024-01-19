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

const siteName = "柿木幹太のポートフォリオサイト";
const description =
  "柿木幹太 (Kanta Kakinoki) のポートフォリオサイト。宮崎大学大学院の学生で、ソフトウェアエンジニアの卵です。";
const url = "https://www.kakinoki-dev.com";

export const metadata: Metadata = {
  title: siteName,
  description: description,
  // openGraph: {
  //   title: siteName,
  //   description,
  //   url,
  //   siteName,
  //   locale: "ja_JP",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteName,
  //   description,
  //   // site: "@サイト用アカウントのTwitterID",
  //   creator: "kantan_IT",
  // },
  // verification: {
  //   google: "サーチコンソールのやつ",
  // },
  // alternates: {
  //   canonical: url,
  // },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp">
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
