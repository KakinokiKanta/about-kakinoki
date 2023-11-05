import Link from "next/link";
import styles from "./Header.module.css";
import { alumiSansCollegiateOne } from "@/lib/fontManager";

export const HEADER_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/etrobo", label: "ETROBOCON" },
  { href: "/university", label: "UNIVERSITY" },
  { href: "/volunteer", label: "VOLUNTEER" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={`${alumiSansCollegiateOne.className} ${styles.home}`}>
          Kakinoki
        </div>
        <div className={styles.items}>
          {HEADER_ITEMS.map((item) => {
            return (
              <Link href={item.href} className={styles.link} key={item.href}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
