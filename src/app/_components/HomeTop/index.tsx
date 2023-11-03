import { HomeImage } from "@/app/_components/HomeTop/HomeImage";
import styles from "./HomeTop.module.css";
import { alumiSansCollegiateOne } from "@/lib/fontManager";

export const HomeTop = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.vercel}>
          <div className={`${alumiSansCollegiateOne.className} ${styles.home}`}>
            Kakinoki
            <br />
            Kanta
          </div>
        </div>
        <HomeImage />
      </div>
    </section>
  );
};
