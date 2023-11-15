import { LinkButton } from "@/components/LinkButton";
import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./HomeAbout.module.css";

export const HomeAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <H2Animation title="ABOUT ME" animation="fadein" />
        <p>宮崎大学の修士1年生です。</p>
        <p>プログラミングは大学から始め、最近はRSCの勉強をしています。</p>
        <p>
          普段は主に、研究、講義、ロボコン、アルバイト、ボランティアなどを行っています。
        </p>
        <LinkButton href="/about" />
      </div>
    </section>
  );
};
