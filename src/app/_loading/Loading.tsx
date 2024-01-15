"use client";

import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  const [isShowLoading, setIsShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false);
    }, 1000);
  });

  return (
    <>
      {isShowLoading && (
        <div className={styles.full}>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
          <p>loading...</p>
        </div>
      )}
    </>
  );
};
