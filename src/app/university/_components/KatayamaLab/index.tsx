import Image from "next/image";
import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./KatayamaLab.module.css";

export const KatayamaLab = () => {
  return (
    <section>
      <div className={styles.h2}>
        <H2Animation title="Laboratory" animation="slideleft" />
      </div>
      <div className={styles.container}>
        <div className={styles.parent}>
          <Image
            src="/University/katayama-laboratory.jpg"
            alt="katayama laboratory image"
            fill
            sizes="(max-width: 768px) 90%, 30%"
            style={{
              objectFit: "cover",
            }}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <p>
            <a
              href="https://earth.cs.miyazaki-u.ac.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              片山徹郎研究室
            </a>
            では、
            「ソフトウェア開発における人間の負担をいかに減らし、ソフトウェアの品質を上げることができるのか？」
            をテーマに、リファクタリング、形式手法、モデリング言語、テスト等を研究しています。
          </p>
          <p>
            また、研究室での学びを実践するためにも、有志メンバーでETロボコンやハッカソンなどに参加しています。
          </p>
        </div>
      </div>
    </section>
  );
};
