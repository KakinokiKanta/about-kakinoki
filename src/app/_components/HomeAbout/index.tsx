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
        普段は研究したり、ETロボコンの活動したりって感じです。
      </p>
      <p className={styles.description}>
        趣味はサッカー観戦です。ラリーガや代表戦はフルで観ることも多いです。
      </p>
      <LinkButton href="/about" />
    </section>
  );
};
