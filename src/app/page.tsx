import { HomeImage } from "@/components/HomeImage";
import styles from "./Page.module.css";
import { Alumni_Sans_Collegiate_One } from "next/font/google";

const AlumiSansCollegiateOne = Alumni_Sans_Collegiate_One({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <main>
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
    </main>
  );
};

export default Home;
