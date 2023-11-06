"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { alumiSansCollegiateOne } from "@/lib/fontManager";
import { Menu } from "../Icons";
import { HEADER_ITEMS } from "@/utils/links";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={`${alumiSansCollegiateOne.className} ${styles.home}`}>
          Kakinoki
        </div>
        {/* <div className={styles.items}> */}
        <div className={styles.humburger} onClick={() => setIsOpen(!isOpen)}>
          <Menu isOpen={isOpen} />
        </div>
        <nav className={isOpen ? styles.nav : styles.nonav}>
          <ul className={styles.ul}>
            {HEADER_ITEMS.map((item) => {
              return (
                <li key={item.href} className={styles.li}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* </div> */}
      </div>
    </header>
  );
};
