import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fontManager";

export const metadata: Metadata = {
  title: "Kakinoki Kanta",
  description: "Self-introduction about Kakinoki Kanta",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
