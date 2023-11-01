"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./HomeImage.module.css";

export const HomeImage = () => {
  const [profileImage, setProfileImage] = useState(
    "/home_imgs/travel_back.JPG"
  );

  return (
    <div className={styles.parent}>
      <Image
        className={styles.image}
        src={profileImage}
        alt="Photo for self-introduction"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
