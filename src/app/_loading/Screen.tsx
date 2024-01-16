import styles from "./Screen.module.css";
import Image from "next/image";

export const Screen = () => {
  return (
    <Image
      src="/icons/Kakinoki-logo-ora.png"
      alt="my logo"
      width={250}
      height={50}
      sizes="(max-width: 1000px) 175px, 250px"
      className={styles.logo}
    />
  );
};
