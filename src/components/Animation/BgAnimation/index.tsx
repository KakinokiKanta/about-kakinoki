import Image from "next/image";
import styles from "./BgAnimation.module.css";

export const BgAnimation = () => {
  const TECH_STACK_ICONS = [
    {
      place: "top",
      style: styles.bgTop,
      icons: [
        {
          image: "/stack_icons/bootstrap.svg",
          alt: "bootstrap icon",
        },
        {
          image: "/stack_icons/c-plusplus.svg",
          alt: "c-plusplus icon",
        },
        {
          image: "/stack_icons/c-sharp.svg",
          alt: "c-sharp icon",
        },
        {
          image: "/stack_icons/c.svg",
          alt: "c icon",
        },
      ],
    },
    {
      place: "middle",
      style: styles.bgMiddle,
      icons: [
        {
          image: "/stack_icons/chrome.svg",
          alt: "chrome icon",
        },
        {
          image: "/stack_icons/create-react-app.svg",
          alt: "create-react-app icon",
        },
        {
          image: "/stack_icons/css-3.svg",
          alt: "css-3 icon",
        },
        {
          image: "/stack_icons/discord-icon.svg",
          alt: "discord icon",
        },
      ],
    },
    {
      place: "bottom",
      style: styles.bgBottom,
      icons: [
        {
          image: "/stack_icons/figma.svg",
          alt: "figma icon",
        },
        {
          image: "/stack_icons/git-icon.svg",
          alt: "git icon",
        },
        {
          image: "/stack_icons/github-actions.svg",
          alt: "github-actions icon",
        },
        {
          image: "/stack_icons/github-icon.svg",
          alt: "github icon",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {TECH_STACK_ICONS.map((item) => {
        return (
          <div className={item.style} key={item.place}>
            <ul className={`${styles.list} ${styles.listLoop}`}>
              {item.icons.map((icon) => {
                return (
                  <li className={styles.item} key={icon.image}>
                    <Image
                      className={styles.img}
                      src={icon.image}
                      fill
                      alt={icon.alt}
                    />
                  </li>
                );
              })}
            </ul>
            <ul className={`${styles.list} ${styles.listLoop}`}>
              {item.icons.map((icon) => {
                return (
                  <li className={styles.item} key={icon.image}>
                    <Image
                      className={styles.img}
                      src={icon.image}
                      fill
                      alt={icon.alt}
                    />
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
