import { title } from "process";
import { AboutMe } from "./_components/AboutMe";
import { List } from "./_components/List";
import { Skills } from "./_components/Skills";

const About = () => {
  const ACHIEVE = {
    title: "ACHIEVE",
    list: [
      "2024/11 : ETロボコンCS(全国)大会2024 アドバンストクラス 総合5位",
      "2024/09 : ETロボコン地区(九州)大会2024 アドバンストクラス 総合準優勝",
      ["モデル審査 ゴールドモデル"],
      "2024/02 : 宮崎県警察本部 感謝状",
      "2023/11 : ETロボコンCS(全国)大会2023 アドバンストクラス 総合6位",
      "2023/10 : ETロボコン地区(九州)大会2022 アドバンストクラス 総合優勝",
      ["競技 準優勝", "モデル審査 ゴールドモデル", "特別賞 IPA賞"],
      "2023/09 : 株式会社ディー・エヌ・エー(DeNA) オータムハッカソン2023 優勝",
      // "2023/08 : 楽天グループ株式会社 短期インターンシップ(1week)",
      "2023/03 : 宮崎大学工学部 優秀学生賞",
      "2023/03 : 公益社団法人計測自動制御学会 優秀学生賞",
      "2022/11 : ETロボコンCS(全国)大会2022 アドバンストクラス 総合4位",
      "2022/10 : ETロボコン地区(九州)大会2022 アドバンストクラス 総合準優勝",
      ["モデル審査 ゴールドモデル"],
      "2021/06 : 特定サイバー防犯ボランティア 受嘱",
    ],
  };

  const THESIS = {
    title: "THESIS",
    list: [
      "2025/02 : Springer Singapore, Genetic and Evolutionary Computing 論文誌投稿",
      "2024/10 : 宮崎大学工学部紀要 論文誌投稿",
      "2024/08 : International Conference on Genetic and Evolutionary Computing (ICGEC-2024) 学会発表",
      "2024/03 : Journal of Robotics, Networking and Artificial Life (JRNAL) 論文誌投稿",
      "2024/02 : International Conference on Artificial Life and Robotics (ICAROB) 学会発表",
      "2023/09 : 電気・情報関係学会九州支部連合大会 学会発表",
    ],
  };

  const EXAMS = {
    title: "EXAMS",
    list: ["基本情報処理技術者", "ITパスポート"],
  };

  const SKILLS = [
    {
      icon: "/stack_icons/typescript-icon.svg",
      alt: "skill stack icon typescript",
      h3: "TypeScript",
      years: "2",
      description:
        "Next.js(React)を用いたWebフロントエンド開発で使用しています。このポートフォリオサイトは、Next.jsを用いて開発しました。それ以外でも、インターンシップやハッカソンなどで使用経験があります。今後はSeleniumやStorybookなども使用していきたいと考えています。",
      relatedSkills: ["JavaScript", "React", "Next.js", "Vercel", "Bootstrap"],
    },
    {
      icon: "/stack_icons/gopher.svg",
      alt: "skill stack icon go",
      h3: "Go",
      years: "1",
      description:
        "まだまだ使用経験や学びは浅いものの、現在最も積極的に学んでいる言語です。Go言語の学習を通して、レイヤーアーキテクチャやクリーンアーキテクチャについても学びました。個人開発やハッカソンで使用経験があります。今後はWebSocket通信を実装してみたいと考えています。",
      relatedSkills: ["Gin"],
    },
    {
      icon: "/stack_icons/c-plusplus.svg",
      alt: "skill stack icon C++",
      h3: "C++",
      years: "4",
      description:
        "主にETロボコンで走行体(ロボット)の制御プログラム実装に使用しています。また、最近はほとんどできていませんが、競技プログラミング(AtCoder)でも使用していました。",
      relatedSkills: ["C"],
    },
    {
      icon: "/stack_icons/c.svg",
      alt: "skill stack icon c",
      h3: "C",
      years: "6",
      description:
        "大学の講義は、主にC言語を用いて実装を行っていました。学部時代には、演習の授業でクライアントサーバシステムをチーム開発しました。",
      relatedSkills: [],
    },
  ];

  return (
    <main>
      <AboutMe />
      <List {...ACHIEVE} content="achieve" />
      <List {...THESIS} content="presentation" />
      <List {...EXAMS} content="qualification" />
      <Skills skill={SKILLS} />
    </main>
  );
};

export default About;
