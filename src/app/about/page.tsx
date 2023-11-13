import { AboutMe } from "./_components/AboutMe";
import { List } from "./_components/List";

const About = () => {
  const ACHIEVEMENTS = {
    title: "ACHIEVEMENTS",
    list: [
      "2023/11 : ETロボコンCS(全国)大会2023 アドバンストクラス 出場",
      "2023/10 : ETロボコン地区(九州)大会2022 アドバンストクラス 総合優勝",
      ["競技 準優勝", "モデル審査 ゴールドモデル", "特別賞 IPA賞"],
      "2023/09 : 株式会社ディー・エヌ・エー(DeNA) オータムハッカソン2023 優勝",
      "2023/09 : 電気・情報関係学会九州支部連合大会 研究発表",
      "2023/08 : 楽天グループ株式会社 短期インターンシップ(1week)",
      "2023/03 : 宮崎大学工学部 優秀学生賞",
      "2023/03 : 公益社団法人計測自動制御学会 優秀学生賞",
      "2022/11 : ETロボコンCS(全国)大会2022 アドバンストクラス 総合4位",
      "2022/10 : ETロボコン地区(九州)大会2022 アドバンストクラス 総合準優勝",
      ["モデル審査 ゴールドモデル"],
      "2021/06 : 特定サイバー防犯ボランティア 受嘱",
    ],
  };

  return (
    <main>
      <AboutMe />
      <List {...ACHIEVEMENTS} isAchieve={true} />
    </main>
  );
};

export default About;
