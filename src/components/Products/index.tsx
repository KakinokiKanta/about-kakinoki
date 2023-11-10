"use client";

import Image from "next/image";
import styles from "./Products.module.css";
import React, { useState } from "react";
import { ModalWin } from "./ModalWin";

type ProductsProps = {
  title: string;
  image: string;
  alt: string;
};

export const Products = (props: ProductsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const manageModal = (e: React.MouseEvent) => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    } else if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className={styles.container} onClick={manageModal}>
        <div className={styles.parent}>
          <Image
            className={styles.image}
            src={props.image}
            alt={props.alt}
            fill
            sizes="30vw"
          />
        </div>
        <h3 className={styles.h3}>{props.title}</h3>
      </div>
      {isOpen && <ModalWin clickEvent={manageModal} />}
    </>
  );
};
