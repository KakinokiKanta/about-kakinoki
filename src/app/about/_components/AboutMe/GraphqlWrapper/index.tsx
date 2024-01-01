"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import { UserImage } from "../UserImage";

export const GraphqlWrapper = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <UserImage />
    </ApolloProvider>
  );
};
