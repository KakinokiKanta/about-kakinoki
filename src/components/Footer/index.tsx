import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { HEADER_ITEMS } from "@/utils/links";
import { ICONS_PATH } from "@/utils/socialIcons";

export const Footer = () => {
  return (
    <>
      <div className={styles.pageTop}>
        <a className={styles.backToTop} href="#pageTop">
          BACK TO TOP
        </a>
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.vercel}>
            <a href={"/"} className={styles.logo}>
              <Image
                src="/icons/Kakinoki-logo-white.png"
                alt="my logo"
                width={200}
                height={40}
              />
            </a>
            <div className={styles.subtitle}>SOCIAL</div>
            <div className={styles.icons}>
              {ICONS_PATH.map((item) => {
                return (
                  <a
                    href={item.href}
                    className={styles.icon}
                    key={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.alt}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.subtitle}>MENU</div>
            <ul className={styles.ul}>
              {HEADER_ITEMS.map((item) => {
                return (
                  <li key={item.label}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Kakinoki
          </p>
        </div>
      </footer>
    </>
  );
};
