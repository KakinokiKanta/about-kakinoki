import Image from "next/image";
import styles from "./BgAnimation.module.css";
import { TECH_STACK_ICONS } from "@/utils/techStackIcons";

export const BgAnimation = () => {
  return (
    <div className={styles.container}>
      {TECH_STACK_ICONS.map((item, index) => {
        return (
          <div className={item.style} key={index}>
            <ul className={`${styles.list} ${styles.listLoop}`}>
              {item.image.map((icon) => {
                return (
                  <li className={styles.item} key={icon}>
                    <Image className={styles.img} src={icon} fill alt="" />
                  </li>
                );
              })}
            </ul>
            <ul className={`${styles.list} ${styles.listLoop}`}>
              {item.image.map((icon) => {
                return (
                  <li className={styles.item} key={icon}>
                    <Image className={styles.img} src={icon} fill alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
