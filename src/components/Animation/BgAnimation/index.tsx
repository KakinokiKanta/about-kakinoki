import Image from "next/image";
import styles from "./BgAnimation.module.css";

export const BgAnimation = () => {
  const TECH_STACK_ICONS = {
    top: [
      "/stack_icons/bootstrap.svg",
      "/stack_icons/c-plusplus.svg",
      "/stack_icons/c-sharp.svg",
      "/stack_icons/c.svg",
    ],
    middle: [
      "/stack_icons/chrome.svg",
      "/stack_icons/create-react-app.svg",
      "/stack_icons/css-3.svg",
      "/stack_icons/discord-icon.svg",
    ],
    bottom: [
      "/stack_icons/figma.svg",
      "/stack_icons/git-icon.svg",
      "/stack_icons/github-actions.svg",
      "/stack_icons/github-icon.svg",
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgTop}>
        <ul className={`${styles.list} ${styles.listLoop}`}>
          {TECH_STACK_ICONS.top.map((item) => {
            return (
              <li className={styles.item} key={item}>
                <Image className={styles.img} src={item} fill alt="" />
              </li>
            );
          })}
        </ul>
        <ul className={`${styles.list} ${styles.listLoop}`}>
          {TECH_STACK_ICONS.top.map((item) => {
            return (
              <li className={styles.item} key={item}>
                <Image className={styles.img} src={item} fill alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.bgMiddle}>
        <ul className={`${styles.list} ${styles.listLoop}`}>
          {TECH_STACK_ICONS.middle.map((item) => {
            return (
              <li className={styles.item} key={item}>
                <Image className={styles.img} src={item} fill alt="" />
              </li>
            );
          })}
        </ul>
        <ul className={`${styles.list} ${styles.listLoop}`}>
          {TECH_STACK_ICONS.middle.map((item) => {
            return (
              <li className={styles.item} key={item}>
                <Image className={styles.img} src={item} fill alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.bgBottom}>
        <ul className={`${styles.list} ${styles.listLoop}`}>
          {TECH_STACK_ICONS.bottom.map((item) => {
            return (
              <li className={styles.item} key={item}>
                <Image className={styles.img} src={item} fill alt="" />
              </li>
            );
          })}
        </ul>
        <ul className={`${styles.list} ${styles.listLoop}`}>
          {TECH_STACK_ICONS.bottom.map((item) => {
            return (
              <li className={styles.item} key={item}>
                <Image className={styles.img} src={item} fill alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
