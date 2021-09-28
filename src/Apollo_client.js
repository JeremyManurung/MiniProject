import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://miniproject1.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
      'x-hasura-admin-secret' : 'OZTuNmDpyRL9fCEds0Mor8VAboVqfWOGyTYqmZZcvqSaKGRuRrVRWUiJuywTKNXB'
  }
});

export default client