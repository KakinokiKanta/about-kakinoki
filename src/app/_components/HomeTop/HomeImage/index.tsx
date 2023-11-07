"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./HomeImage.module.css";

export const HomeImage = () => {
  const IMAGE_LIST = [
    "/home_imgs/travel_back.JPG",
    "/home_imgs/ankake.jpg",
    "/home_imgs/travel_lufy.JPG",
    "/home_imgs/balloon.jpg",
    "/home_imgs/tomato_ramen.jpg",
  ];

  const [profileImageIndex, setProfileImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileImageIndex((prevIndex) => (prevIndex + 1) % IMAGE_LIST.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.parent}>
      {IMAGE_LIST.map((image, index) => {
        return (
          <Image
            className={`${styles.image} ${
              index === profileImageIndex && styles.active
            }`}
            src={image}
            alt="Photo for self-introduction"
            fill
            style={{
              objectFit: "cover",
            }}
            key={index}
          />
        );
      })}
    </div>
  );
};
