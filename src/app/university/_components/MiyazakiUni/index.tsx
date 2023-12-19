import { H1Animation } from "@/components/Animation/H1Animation";
import { ProEx } from "./ProEx";
import styles from "./MiyazakiUni.module.css";

export const MiyazakiUni = () => {
  const PROEX_PROPS = [
    {
      h3: "プログラミング演習5",
      img: "/University/ER.png",
      alt: "ER image",
      p: [
        "プログラミング演習5では、「インターンシップ評定書・オンライン提出システム」のサーバサイドを、C言語で開発しました。",
        "チームメンバーは10人で3カ月間開発しました。開発はウォーターフォールモデルに準じて行いました",
        "開発を進める上で要求仕様書やDFD、システム機能定義書、ER図、シーケンス図を作成しました。ここでは、例としてER図を掲載します。",
        "このシステムでは、DBへの様々なCRUD操作を、コマンドと引数に応じて行えます。",
      ],
    },
    {
      h3: "プログラミング演習6",
      img: "/University/intern_register.png",
      alt: "intern_register image",
      p: [
        "プログラミング演習6では、「インターンシップ評定書・オンライン提出システム」のクライアントサイドを、C言語とGlade(GUI実装ツール)で開発しました。",
        "開発期間やメンバーはプログラミング演習5と同様です。",
        "システムの1画面(私が担当した画面の1つ)を掲載します。この画面では、企業側の人員が募集するインターンシップをシステムに登録でき、また、登録したインターンシップに対して詳細な情報を設定できます。",
        "この開発では、GUI実装のためにGladeを用いたのですが、参考にできるような資料がほとんどなかったため、自分たちの手で動かしながら仕様を確認して開発を進めました。",
      ],
    },
  ];

  return (
    <section>
      <div className={styles.h1}>
        <H1Animation title="University" />
      </div>
      <div>
        <p>
          大学では、工学研究科工学専攻の情報システム工学分野に在籍しています。
          様々な講義でコンピュータサイエンスに関する基礎やプログラミングについて学んでいます。
        </p>
        <p>
          学部3年時から
          <a
            href="https://earth.cs.miyazaki-u.ac.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            片山徹郎研究室
          </a>
          に在籍しています。
          片山研究室では、「ソフトウェア開発における人間の負担をいかに減らし、ソフトウェアの品質を上げることができるのか?」をテーマに研究しています。
        </p>
        <p>
          学部時代は、工学部の情報システム工学科に在籍していました。
          GPAは約3.8で、学科次席の成績を収めました。
          また、大学から優秀学生賞をいただき、さらに、公益社団法人計測自動制御学会からも優秀学生賞をいただきました。
        </p>
      </div>
      <ProEx {...PROEX_PROPS[0]} />
      <ProEx {...PROEX_PROPS[1]} />
    </section>
  );
};
