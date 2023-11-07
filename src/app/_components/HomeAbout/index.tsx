import { LinkButton } from "@/components/LinkButton";
import { H2Animation } from "@/components/H2Animattion";
import styles from "./HomeAbout.module.css";

export const HomeAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <H2Animation title="ABOUT ME" />
        <p className={styles.description}>宮崎大学の修士1年生です。</p>
        <p className={styles.description}>
          プログラミングは大学から始め、最近はRSCの勉強をしています。
        </p>
        <p className={styles.description}>
          普段は主に、研究、講義、ロボコン、アルバイト、ボランティアなどを行っています。
        </p>
        <LinkButton href="/about" />
      </div>
    </section>
  );
};
