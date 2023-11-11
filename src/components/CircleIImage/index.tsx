"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./CircleImage.module.css";

type CircleImageProps = {
  image_path: string;
};

export const CircleImage = (props: CircleImageProps) => {
  const [profileImage, setProfileImage] = useState(props.image_path);

  return (
    <div className={styles.parent}>
      <Image
        className={styles.image}
        src={profileImage}
        alt="Photo for self-introduction"
        fill
        sizes="50vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
