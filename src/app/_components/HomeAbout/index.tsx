import { LinkButton } from "@/components/LinkButton";
import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./HomeAbout.module.css";

export const HomeAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <H2Animation title="ABOUT ME" animation="fadein" />
        <p>IT系のメガベンチャー企業で働く予定のソフトウェアエンジニアです。</p>
        <p>プログラミングは大学から始め、最近はサーバーサイドの勉強中。</p>
        <p>
          学生時代は主に、研究、講義、ロボコン、アルバイト、ボランティアなどを行っていました。
        </p>
        <LinkButton href="/about" />
      </div>
    </section>
  );
};
