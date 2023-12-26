"use client";

import Image from "next/image";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import styles from "./UserImage.module.css";

export const UserImage = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className={styles.parent}>
        {/* TODO: githubAPI */}
        <Image
          src="/home_imgs/travel_back.JPG"
          alt="Kakinoki profile image"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 50%, 30%"
        />
      </div>
    </ApolloProvider>
  );
};
