import { HomeImage } from "@/components/HomeImage";
import styles from "./Page.module.css";

const Home = () => {
  return (
    <main>
      <div className={styles.container}>
        <h1>Kakinoki Kanta</h1>
        <HomeImage />
      </div>
    </main>
  );
};

export default Home;
