import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  headers: { authorirization: `Bearer ${process.env.GITHUB_API_KEY}` },
  uri: "https://api.github.com/graphql",
});
