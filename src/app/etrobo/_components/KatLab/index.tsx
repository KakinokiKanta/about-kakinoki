import styles from "./KatLab.module.css";
import { H2Animation } from "@/components/Animation/H2Animation";
import { List } from "./List";
import Image from "next/image";

export const KatLab = () => {
  const ACHIEVE = {
    list: [
      "2023/11 : ETロボコンCS(全国)大会2023 アドバンストクラス 総合6位",
      "2023/10 : ETロボコン地区(九州)大会2022 アドバンストクラス 総合優勝",
      ["競技 準優勝", "モデル審査 ゴールドモデル", "特別賞 IPA賞"],
      "2022/11 : ETロボコンCS(全国)大会2022 アドバンストクラス 総合4位",
      "2022/10 : ETロボコン地区(九州)大会2022 アドバンストクラス 総合準優勝",
      ["モデル審査 ゴールドモデル"],
    ],
  };

  return (
    <section>
      <div className={styles.h2}>
        <H2Animation title="KatLab" animation="slideleft" />
      </div>
      <div className={styles.container}>
        <div className={styles.parent}>
          <Image
            src="/robocon/robocon_2022.jpg"
            alt="robocon testimonial"
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
            私はETロボコンに研究室の有志メンバーと参加しています。チームはKatLab(カタラボ)といい、6年連続で全国大会に出場している結構強いチームです。ETロボコンはレベルごとに3つのクラスに分かれており、KatLabは最もレベルの高いアドバンストクラスに参加しています。
          </p>
          <p>
            KatLabでは、ロボットの制御プログラムをC++で実装し、コース上のWebカメラを用いた処理を行うカメラシステムをPythonで実装しています。また、開発プロセスはアジャイル開発を採用し、Git/GitHubによるバージョン管理、GitHub
            Actionsを用いたCI/CD環境の構築、Flaskを用いたサーバ構築、ZenHubを用いたタスク管理など、思いつくままに様々な手法やツールを導入しています。
          </p>
          <p>
            KatLabでの私の役割は、2022年大会では主に実装を担当し、2023年大会では設計と実装を担当していました。また、2023年大会ではチームリーダーとして、チームマネジメントやタスク全体の管理、運営や他チームとの交流などの役割も担っていました。
          </p>
        </div>
      </div>
      <List {...ACHIEVE} />
    </section>
  );
};
