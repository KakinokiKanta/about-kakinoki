import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./Achievements.module.css";

export const Achievements = () => {
  return (
    <section>
      <div className={styles.h2}>
        <H2Animation title="ACHIEVEMENTS" animation="slideleft" />
      </div>
      <ul>
        <li>ahievement1</li>
        <li>ahievement2</li>
        <li>ahievement3</li>
        <li>ahievement4</li>
        <li>ahievement5</li>
        <li>ahievement6</li>
      </ul>
    </section>
  );
};
