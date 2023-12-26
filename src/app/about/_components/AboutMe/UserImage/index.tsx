import Image from "next/image";
import styles from "./UserImage.module.css";

export const UserImage = () => {
  return (
    <div className={styles.parent}>
      {/* TODO: githubAPI */}
      <Image
        src="/home_imgs/travel_back.JPG"
        alt="Kakinoki profile image"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 50%, 30%"
      />
    </div>
  );
};
