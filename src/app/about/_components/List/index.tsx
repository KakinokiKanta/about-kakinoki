import React from "react";
import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./List.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ListProps = {
  title: string;
  list: (string | string[])[];
  content: string;
};

export const List = (props: ListProps) => {
  let listStyle: string;
  switch (props.content) {
    case "achieve":
      listStyle = styles.achieve;
      break;
    case "qualification":
      listStyle = styles.qualification;
      break;
    default:
      listStyle = styles.presentation;
      break;
  }

  return (
    <section>
      <div className={styles.h2}>
        <H2Animation title={props.title} animation="slideleft" />
      </div>
      <ul className={styles.list}>
        {props.list.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {typeof item === "string" ? (
                <li className={listStyle}>{item}</li>
              ) : (
                <ul className={styles.listChild}>
                  {item.map((itemChild) => {
                    return (
                      <li className={listStyle} key={itemChild}>
                        {itemChild}
                      </li>
                    );
                  })}
                </ul>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};
