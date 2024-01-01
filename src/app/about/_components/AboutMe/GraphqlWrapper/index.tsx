import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { UserImage } from "../UserImage";

export const GraphqlWrapper = () => {
  const GET_USER_INFO = gql`
    query {
      viewer {
        login
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_USER_INFO);
  // console.log(data);

  return (
    <ApolloProvider client={apolloClient}>
      <UserImage />
    </ApolloProvider>
  );
};
