import Image from "next/image";
import styles from "./ModalWin.module.css";
import React from "react";
import { Close } from "@/components/Icons";

type ModalWinProps = {
  clickEvent: (e: React.MouseEvent) => void;
  clickButton: () => void;
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

export const ModalWin = (props: ModalWinProps) => {
  return (
    <div className={styles.modalOverlay} onClick={props.clickEvent}>
      <div className={styles.modal}>
        <div className={styles.topWidth}>
          <div className={styles.top}>
            <h2>{props.title}</h2>
            <div onClick={props.clickButton} className={styles.button}>
              <Close />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.parent}>
            <Image
              src={props.image}
              alt={props.alt}
              fill
              sizes="45vw"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          {props.description.map((item) => {
            return (
              <p className={styles.description} key={item}>
                {item}
              </p>
            );
          })}
          <ul className={styles.ul}>
            {props.links.map((item) => {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.kinds}
                  </a>
                </li>
              );
            })}
          </ul>
          <h3 className={styles.h3}>使用技術</h3>
          <div className={styles.tools}>
            {props.tools.map((tool, index) => {
              return (
                <div className={styles.tool} key={tool}>
                  {props.tools.length - 1 === index ? tool : `${tool},`}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
