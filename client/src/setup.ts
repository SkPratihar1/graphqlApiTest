import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'jest-localstorage-mock';
// Create an HTTP link for connecting to the GraphQL server
const httpLink = createHttpLink({
  //uri: process.env.GRAPHQL_SERVER_URL,
  uri:"https://healthtech-core.x-studio.io/graphql"
   // GraphQL server URL
});

// Create a middleware function to add authorization headers to requests
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from localStorage or wherever it's stored
  const authToken = localStorage.getItem('authToken'); // Example: Retrieve token from localStorage

  // Return the headers to be used in the request
  return {
    headers: {
      ...headers,
      Authorization: authToken ? `Bearer ${authToken}` : '', // Include the token in the Authorization header if available
    },
  };
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain the HTTP link with the auth middleware
  cache: new InMemoryCache(), // Initialize the cache
});
(global as any).localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

// Import your test file and run the tests
// import './api.test.ts';
