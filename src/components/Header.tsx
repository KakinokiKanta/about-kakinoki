import Link from "next/link";
import styles from "./Header.module.css";
import { AlumiSansCollegiateOne } from "@/lib/fontManager";

export const Header = () => {
  const HEADER_ITEMS = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/etrobo", label: "ETROBOCON" },
    { href: "/university", label: "UNIVERSITY" },
    { href: "/volunteer", label: "VOLUNTEER" },
  ];

  return (
    <header>
      <div className={styles.container}>
        <div className={`${AlumiSansCollegiateOne.className} ${styles.home}`}>
          Kakinoki Kanta
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
