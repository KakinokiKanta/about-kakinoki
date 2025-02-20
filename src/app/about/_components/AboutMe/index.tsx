import { H1Animation } from "@/components/Animation/H1Animation";
import Image from "next/image";
import styles from "./AboutMe.module.css";
import { ICONS_PATH } from "@/utils/socialIcons";
import { UserImage } from "./UserImage";
import { GraphqlWrapper } from "./GraphqlWrapper";

export const AboutMe = () => {
  return (
    <section>
      <div className={styles.h1}>
        <H1Animation title="ABOUT ME" />
      </div>
      <div className={styles.aboutContainer}>
        <UserImage />
        <div className={styles.text}>
          <p>
            IT系のメガベンチャー企業で働く予定のソフトウェアエンジニアです。宮崎大学で情報工学について学んでいました。プログラミングは大学入学から学び始め、最近はサーバーサイドについて学んでいます。
          </p>
          <p>一度任されたことは最後までやり通す責任感と真面目さが取柄です。</p>
          <p>
            学生時代は、研究、ロボコンの開発、サイバーボランティアの活動、ハッカソンなど幅広く様々なことに挑戦しました。
          </p>
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
      </div>
      <div className={styles.contribution}>
        <GraphqlWrapper />
      </div>
    </section>
  );
};
