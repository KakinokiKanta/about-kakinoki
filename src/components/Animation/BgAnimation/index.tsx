import Image from "next/image";
import styles from "./BgAnimation.module.css";

export const BgAnimation = () => {
  const TECH_STACK_ICONS = [
    {
      style: styles.bgTop,
      image: [
        "/stack_icons/bootstrap.svg",
        "/stack_icons/c-plusplus.svg",
        "/stack_icons/c-sharp.svg",
        "/stack_icons/c.svg",
      ],
    },
    {
      style: styles.bgMiddle,
      image: [
        "/stack_icons/chrome.svg",
        "/stack_icons/create-react-app.svg",
        "/stack_icons/css-3.svg",
        "/stack_icons/discord-icon.svg",
      ],
    },
    {
      style: styles.bgBottom,
      image: [
        "/stack_icons/figma.svg",
        "/stack_icons/git-icon.svg",
        "/stack_icons/github-actions.svg",
        "/stack_icons/github-icon.svg",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {TECH_STACK_ICONS.map((item) => {
        return (
          <div className={item.style} key={"top"}>
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
