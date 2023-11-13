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
        // "/stack_icons/chrome.svg",
        // "/stack_icons/create-react-app.svg",
        "/stack_icons/css-3.svg",
        // "/stack_icons/discord-icon.svg",
        "/stack_icons/figma.svg",
        // "/stack_icons/firebase.svg",
        "/stack_icons/flask.svg",
        "/stack_icons/git-icon.svg",
      ],
    },
    {
      style: styles.bgMiddle,
      image: [
        "/stack_icons/github-actions.svg",
        "/stack_icons/github-icon.svg",
        "/stack_icons/html-5.svg",
        "/stack_icons/javascript.svg",
        // "/stack_icons/microsoft-teams.svg",
        "/stack_icons/mysql-icon.svg",
        "/stack_icons/nextjs-icon.svg",
        "/stack_icons/nodejs-icon.svg",
        // "/stack_icons/nodejs.svg",
        "/stack_icons/zenhub-icon.svg",
        // "/stack_icons/npm-icon.svg",
        // "/stack_icons/php.svg",
      ],
    },
    {
      style: styles.bgBottom,
      image: [
        "/stack_icons/postgresql.svg",
        // "/stack_icons/postman-icon.svg",
        "/stack_icons/python.svg",
        "/stack_icons/react.svg",
        "/stack_icons/slack-icon.svg",
        "/stack_icons/typescript-icon.svg",
        "/stack_icons/unity.svg",
        "/stack_icons/vercel.svg",
        "/stack_icons/visual-studio-code.svg",
        // "/stack_icons/webpack.svg",
        // "/stack_icons/notion-icon.svg",
        // "/stack_icons/zoom-icon.svg",
      ],
    },
  ];

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
