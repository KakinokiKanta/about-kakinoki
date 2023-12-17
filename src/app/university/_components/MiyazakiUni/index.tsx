import { H1Animation } from "@/components/Animation/H1Animation";
import styles from "./MiyazakiUni.module.css";

export const MiyazakiUni = () => {
  return (
    <section>
      <div className={styles.h1}>
        <H1Animation title="University" />
      </div>
      <div>
        <p>
          大学では、様々な講義でコンピュータサイエンスに関する基礎やプログラミングについて学んでいます。
        </p>
        <p>
          ここでは、宮崎大学の情報システム工学科で特に目玉だと感じた「プログラミング演習5・6」について紹介します。
        </p>
      </div>
    </section>
  );
};
