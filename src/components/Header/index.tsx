"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { Menu } from "../Icons";
import { HEADER_ITEMS } from "@/utils/links";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href={"/"} className={styles.logo}>
          <Image
            src="/icons/Kakinoki-logo-ora.png"
            alt="my logo"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 1000px) 175px, 250px"
          />
        </a>
        <div className={styles.humburger} onClick={() => setIsOpen(!isOpen)}>
          <Menu isOpen={isOpen} />
        </div>
        <nav className={isOpen ? styles.nav : styles.nonav}>
          <ul className={styles.ul}>
            {HEADER_ITEMS.map((item) => {
              return (
                <li key={item.href} className={styles.li}>
                  <Link
                    href={item.href}
                    className={styles.link}
                    onClick={(isOpen) => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
