import styles from "./Screen.module.css";
import Image from "next/image";

export const Screen = () => {
  return (
    <div className={styles.full}>
      <Image
        src="/icons/Kakinoki-logo-ora.png"
        alt="my logo"
        width={250}
        height={50}
        priority
        // loading="eager"
        sizes="50px, 250px"
        className={styles.logo}
      />
    </div>
  );
};
