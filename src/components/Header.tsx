import Link from "next/link";
import styles from "./Header.module.css";
import { AlumiSansCollegiateOne } from "@/lib/fontManager";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        {/* フォントを変える */}
        <div className={`${AlumiSansCollegiateOne.className} ${styles.home}`}>
          Kakinoki Kanta
        </div>
        <div className={styles.items}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </div>
      </div>
    </header>
  );
};
