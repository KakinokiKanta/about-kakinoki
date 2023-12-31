"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { ModalWin } from "./ModalWin";

type ProductsProps = {
  title: string;
  image: string;
  alt: string;
  description: string[];
  tools: string[];
  links: {
    href: string;
    kinds: string;
  }[];
};

export const Products = (props: ProductsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const manageModal = (e: React.MouseEvent) => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    } else if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const body = document.body;

    body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content} onClick={manageModal}>
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
      </div>
      {isOpen && (
        <ModalWin
          clickEvent={manageModal}
          clickButton={closeModal}
          {...props}
        />
      )}
    </>
  );
};
