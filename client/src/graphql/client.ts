import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create an HTTP link to the GraphQL server
const httpLink = new HttpLink({
  uri: "https://healthtech-core.x-studio.io/graphql", // Update with your GraphQL endpoint
});

// Create a new instance of ApolloClient
const apolloClient = new ApolloClient({
  link: httpLink, // Set the HTTP link
  cache: new InMemoryCache(), // Use an in-memory cache
});

export default apolloClient;