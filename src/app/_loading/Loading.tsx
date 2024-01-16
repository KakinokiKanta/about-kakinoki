// "use client";

// import { ReactNode, useEffect, useState } from "react";
import { ReactNode } from "react";
import styles from "./Loading.module.css";

type LoadingProps = {
  children: ReactNode;
};

export const Loading = (props: LoadingProps) => {
  // const [isShowLoading, setIsShowLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShowLoading(false);
  //   }, 1000);
  // });

  return (
    <>
      {/* {isShowLoading && (
        <div className={styles.animation}>{props.children}</div>
      )} */}
      <div className={styles.animation}>{props.children}</div>
    </>
  );
};
