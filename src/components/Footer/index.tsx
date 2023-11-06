import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { alumiSansCollegiateOne } from "@/lib/fontManager";
import { HEADER_ITEMS } from "@/utils/links";

export const Footer = () => {
  const ICONS_PATH = [
    {
      image: "/icons/x-logo-black.png",
      href: "https://twitter.com/kantan_IT",
      alt: "x icon",
    },
    {
      image: "/icons/github-mark.png",
      href: "https://github.com/KakinokiKanta",
      alt: "github icon",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.vercel}>
          <div className={`${styles.name} ${alumiSansCollegiateOne.className}`}>
            Kakinoki
          </div>
          <div className={styles.subtitle}>SOCIAL</div>
          <div className={styles.icons}>
            {ICONS_PATH.map((item) => {
              return (
                <a href={item.href} className={styles.icon} key={item.image}>
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
          {HEADER_ITEMS.map((item) => {
            return (
              <Link href={item.href} className={styles.link} key={item.label}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Kakinoki
        </p>
      </div>
    </footer>
  );
};
