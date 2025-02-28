import { H1Animation } from "@/components/Animation/H1Animation";
import styles from "./AboutET.module.css";
import { Years } from "./Years";

const YEARS_PROPS = [
  {
    h3: "2022年大会",
    img: "/robocon/2022_course.png",
    alt: "2022 etrobocon course image",
    p: [
      "ETロボコン2022年大会では、タイムを計測するエリアと、難所として設定されているブロックエリアが存在します。",
      "タイムを計測するエリアでは、スタートからゴールまで黒線がつながっており、その黒線上を走行するなどしてゴールを目指します。",
      "ブロックエリアでは、点線で円状に描かれた8つの枠内に、ランダムにブロックが配置されています(赤、青、緑、黄の各2ブロック)。それらのブロックを色ごとに既定の箇所に移動することで、移動できたブロックの個数に応じたボーナスポイントを獲得することができます。",
      "最終的な競技の得点は、走行タイムとボーナスポイントから算出されます。",
    ],
  },
  {
    h3: "2023年大会",
    img: "/robocon/2023_course.png",
    alt: "2023 etrobocon course image",
    p: [
      "ETロボコン2023年大会では、難所として設定されている競技が3つ存在します。",
      "1つ目の難所は8の字状になったエリアです。円の中心に向きのわからない人形が置かれており、ロボットの後ろに搭載されているカメラでその人形を正面から撮影し、運営の用意している競技用システムにアップロードします。",
      "2つ目の難所は、ブロックエリアです。ここは、2022年大会のブロックエリアを少し簡単にした競技を行います。",
      "3つ目の難所は、ブロックエリア横のIoT列車という競技です。ここでは、ラズパイを搭載したプラレールの新幹線に停止指示をHTTPリクエストとして送信することで、列車を停止させ、停止させた位置に応じたポイントを獲得できます。",
    ],
  },
  {
    h3: "2024年大会",
    img: "/robocon/2024_course.png",
    alt: "2024 etrobocon course image",
    p: [
      "ETロボコン2024年大会でも、難所として設定されている競技が3つ存在します。",
      "1つ目の難所は8の字状になったエリアです。2023年の大会と同様、楕円の中心ある向きのわからない人形を、ロボットに搭載されているカメラで、その人形を正面から撮影し、運営の用意している競技用システムにアップロードします。さらに、円の中心にはプラレールが走っており、プラレールが特定の箇所に来た際に撮影する、動く物体の検知と撮影をする必要があります。",
      "2つ目の難所は、ブロックエリアです。ここでは、ランダムに配置されたダミーのブロックを避けて、これまたランダムに配置された得点となるブロックを移動させます。",
      "3つ目の難所は、青い枠内のどこかに存在するペットボトルを、指定された箇所まで運びます。",
    ],
  },
];

export const AboutET = () => {
  return (
    <section>
      <div className={styles.h1}>
        <H1Animation title="ET ROBOT CONTEST" />
      </div>
      <div>
        <p>
          <a
            href="https://www.etrobo.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETロボコン
          </a>
          の大きな特徴は、「全出場チームが同じハードウェアを使用し、ソフトウェアだけで優劣が決まる」点、「学生とエンジニアのガチンコバトルが見られる」点、「総合成績が競技と設計によって決まる」点の3つです。
        </p>
        <p>
          ロボコンと聞くと、多くの人がハードウェアを作成することを想像すると思いますが、ETロボコンでは、ハードウェアの作成は行いません。ハードウェアは市販のツールキットである「
          <a
            href="https://afrel.co.jp/product/et-set/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETロボコンキット
          </a>
          」を使用することで、ソフトウェアの優劣を付けるコンテストとしています。
        </p>
        <p>
          また、自社の名前を背負ってプライドを見せる企業チームに、学生チームがどこまで戦えるのか、打ち倒すことができるのかといった楽しみもあります。
        </p>
        <p>
          個人的な一番の特徴は、総合成績が「競技」＋「設計」で決まる点です。これにより、何となく実装をして終わりではなく、必要な機能や品質、制約を考慮した要求分析を行い、システム全体の構造や動作の分析、各システムの構造と振舞いの設計、制御戦略とその戦略で用いる要素技術の検討など、設計に関しても実践的に学ぶことができます。私のチームが作成した設計書(モデル)は
          <a href="#model">こちら</a>。
        </p>
      </div>
      <Years {...YEARS_PROPS[0]} />
      <Years {...YEARS_PROPS[1]} />
      <Years {...YEARS_PROPS[2]} />
      <div className={styles.movie}>
        <iframe
          className={styles.youtube}
          src="https://www.youtube.com/embed/ISdRLRbNAEk?si=Z3uGPXfrcdMYH1L_&amp;start=20128"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
