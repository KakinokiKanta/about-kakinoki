"use client";

import Image from "next/image";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import styles from "./UserImage.module.css";
import { gql, useQuery } from "@apollo/client";

export const UserImage = () => {
  const GET_USER_INFO = gql`
    query {
      viewer {
        login
      }
    }
  `;

  // const { data, error, loading } = useQuery(GET_USER_INFO);
  // console.log(data);

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
