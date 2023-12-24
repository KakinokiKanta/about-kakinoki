import { H1Animation } from "@/components/Animation/H1Animation";
import Image from "next/image";
import styles from "./AboutMe.module.css";
import { ICONS_PATH } from "@/utils/socialIcons";

export const AboutMe = () => {
  return (
    <section>
      <div className={styles.h1}>
        <H1Animation title="ABOUT ME" />
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.parent}>
          {/* TODO: githubAPI */}
          <Image
            src="/home_imgs/travel_back.JPG"
            alt="Kakinoki profile image"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50%, 30%"
          />
        </div>
        <div className={styles.text}>
          <p>
            宮崎大学大学院の修士1年生です。工学研究科に在籍しており、学部生時代は工学部の情報システム工学科に在籍していました。プログラミングは大学入学から学び始め、最近はWebフロントについて1から学んでいます。
          </p>
          <p>
            真面目さが取柄で、学部生時代はその真面目さを発揮して学科次席の成績を収め、大学や計測自動制御学会から優秀学生賞をいただきました。
          </p>
          <p>
            普段は、研究をしたり、研究室の有志メンバーと参加している「ETロボコン」の開発を行ったり、宮崎県警察と共同で活動する「特定サイバー防犯ボランティア」としての取り組みを行ったりしています。
          </p>
          <p>
            *研究については、企業様との共同研究であるため、記載を控えさせていただきます。
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
    </section>
  );
};
