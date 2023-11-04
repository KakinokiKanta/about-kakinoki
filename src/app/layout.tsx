import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fontManager";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kakinoki Kanta",
  description: "Self-introduction about Kakinoki Kanta",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
