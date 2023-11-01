"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./HomeImage.module.css";

export const HomeImage = () => {
  const [profileImage, setProfileImage] = useState(
    "/home_imgs/travel_back.JPG"
  );

  return (
    <Image
      className={styles.image}
      src={profileImage}
      alt="Photo for self-introduction"
      width={1000}
      height={650}
    />
  );
};
