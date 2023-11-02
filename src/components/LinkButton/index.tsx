"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { rowdies } from "@/lib/fontManager";
import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  href: string;
};

export const LinkButton = (props: LinkButtonProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.link} ${rowdies.className}`}
    >
      View More
    </button>
  );
};
