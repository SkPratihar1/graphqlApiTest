import { login } from '../rest/auth';
import { GetAllCareTeamTypeQuery } from '../graphql/queries';
//import client from '../setup';


import apolloClient from '../graphql/client';

import { pretaaHealthGetAllCareTeamType } from '../graphql/types';

describe('API Testing with Apollo Client', () => {
  let authToken: string | null = null; 

  beforeAll(async () => {
    try {
      // Perform login to obtain authentication token
      authToken = await login('healthtech+sneh+super@itobuz.com', 'Itobuz#1234');
      console.log(authToken);
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  });

  test('Fetch User Data with GraphQL API', async () => {
    
    console.log('yguygfugyug',authToken);
    
    if (!authToken) {
      throw new Error('Authentication token not available');

    }

    try {
      // Execute GraphQL query with authentication token
      const result = await apolloClient.query<{ user: pretaaHealthGetAllCareTeamType }>({
        query: GetAllCareTeamTypeQuery,
        context: {
          headers: {
            Authorization: `Bearer ${authToken}`,

          },
        },
      });
      console.log('iiiiiii',result.data);
      
      expect(result.data).toBeDefined();
      // expect(result.data.user).toBeDefined();
      // Add more assertions as needed
    } catch (error) {
      console.error('GraphQL query failed:', error);
    }
  });
});