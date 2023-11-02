import { LinkButton } from "@/components/LinkButton";
import styles from "./HomeAbout.module.css";
import { rowdies } from "@/lib/fontManager";

export const HomeAbout = () => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.head} ${rowdies.className}`}>ABOUT ME</h2>
      <p className={styles.description}>宮崎大学の修士1年生です。</p>
      <p className={styles.description}>
        プログラミングは大学から始め、最近はRSCの勉強をしています。
      </p>
      <p className={styles.description}>
        普段は研究とか、ETロボコンの活動をしています。
      </p>
      <LinkButton href="/about" />
    </section>
  );
};
