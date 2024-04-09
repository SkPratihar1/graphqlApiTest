import { login } from '../rest/auth';
import { eventQuery } from '../graphql/event.query';


import apolloClient from '../graphql/client';

import { EventFilterTypes,
    PretaaHealthEventSearch,
    PretaaHealthEventSearchVariables } from '../health-generatedTypes';

describe('API Testing with Apollo Client', () => {
  let authToken: string | null = null; 

  beforeAll(async () => {
    try {
      authToken = await login('healthtech+pratihar+simon1@itobuz.com', 'pR3t@A1234');
      console.log("oppo oppo ",authToken);
      
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
      const result = await apolloClient.query<{ pretaaHealthEventSearch: PretaaHealthEventSearch }>({
        query: eventQuery,
        variables: {
            take: 100,
          },
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