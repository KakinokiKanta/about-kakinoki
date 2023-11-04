import { LinkButton } from "@/components/LinkButton";
import styles from "./HomeAbout.module.css";
import { rowdies } from "@/lib/fontManager";

export const HomeAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.head} ${rowdies.className}`}>ABOUT ME</h2>
        <p className={styles.description}>宮崎大学の修士1年生です。</p>
        <p className={styles.description}>
          プログラミングは大学から始め、最近はRSCの勉強をしています。
        </p>
        <p className={styles.description}>
          普段は主に、研究、講義、ロボコン、アルバイト、ボランティアなどを行っています。
        </p>
        <p className={styles.description}>
          趣味はサッカー観戦やテニス、ゲーム、アニメ鑑賞です。
        </p>
        <LinkButton href="/about" />
      </div>
    </section>
  );
};
