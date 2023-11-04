import Link from "next/link";
import { HEADER_ITEMS } from "../Header";
import styles from "./Footer.module.css";
import { alumiSansCollegiateOne } from "@/lib/fontManager";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.vercel}>
          <div className={`${styles.name} ${alumiSansCollegiateOne.className}`}>
            kakinoki
          </div>
          <div className={styles.subtitle}>SOCIAL</div>
          <div className={styles.icons}>
            <div className={styles.icon}>Xのアイコン</div>
            <div className={styles.icon}>githubのアイコン</div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.subtitle}>MENU</div>
          {HEADER_ITEMS.map((item) => {
            return (
              <Link href={item.href} className={styles.link} key={item.label}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
