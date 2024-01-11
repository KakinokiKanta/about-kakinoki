"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import { GithubContribution } from "./GithubContribution";

export const GraphqlWrapper = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GithubContribution />
    </ApolloProvider>
  );
};
