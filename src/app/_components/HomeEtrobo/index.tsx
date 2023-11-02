import { CircleImage } from "@/components/CircleIImage";
import styles from "./HomeEtrobo.module.css";
import { rowdies } from "@/lib/fontManager";
import { LinkButton } from "@/components/LinkButton";

export const HomeEtrobo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CircleImage image_path="/home_imgs/robocon_body.jpeg" />
        <div className={styles.vercel}>
          <h2 className={`${rowdies.className} ${styles.head}`}>
            ET Robot Contest
          </h2>
          <p className={styles.description}>
            ETロボコンでは全チームが同じハードウェアを使用するため、ソフトウェアで優劣を競います。
          </p>
          <p className={styles.description}>
            総合成績は「設計」+「競技」で決定します。
          </p>
          <p className={styles.description}>
            私の所属するチームは、今年(2023年)の九州地区1位で、全国大会出場が決定しています。
          </p>
          <LinkButton href="/etrobo" />
        </div>
      </div>
    </section>
  );
};
