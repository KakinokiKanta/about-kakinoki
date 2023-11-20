import React from "react";
import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./List.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ListProps = {
  list: (string | string[])[];
};

export const List = (props: ListProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {props.list.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {typeof item === "string" ? (
                <li className={styles.achieve}>{item}</li>
              ) : (
                <ul className={styles.listChild}>
                  {item.map((itemChild) => {
                    return (
                      <li className={styles.achieve} key={itemChild}>
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
    </div>
  );
};
