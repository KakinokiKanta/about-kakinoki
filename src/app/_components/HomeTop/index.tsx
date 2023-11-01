import { HomeImage } from "@/app/_components/HomeImage";
import styles from "./HomeTop.module.css";
import { AlumiSansCollegiateOne } from "@/lib/fontManager";

export const HomeTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.vercel}>
        <div className={`${AlumiSansCollegiateOne.className} ${styles.home}`}>
          Kakinoki
          <br />
          Kanta
        </div>
      </div>
      <HomeImage />
    </div>
  );
};
