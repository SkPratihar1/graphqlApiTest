import { login } from '../rest/auth';
import { getPatientSurveyList, } from '../graphql/getPatientSurveyList.query.ts';


import apolloClient from '../graphql/client';

import { SurveyStatusTypePatient,
    GetPatientSurveysForCounsellor,
     } from '../health-generatedTypes';
    //  const credentials={
    //     counselor:{
    //         email:'sdfgh',
    //         password:'avcd',
    //     },
    //     facilityAdmin:{
    //         email:'uygj',
    //         password:'efgh',
    //     }
    // }
     

    //  for(const userType in credentials){
    //     console.log(credentials[userType].email);
    //     console.log(credentials[userType].password);
        
    //  }

describe('API Testing with Apollo Client', () => {
  let authToken: string | null = null; 
  
  
  beforeAll(async () => {
    try {
      authToken = await login('jiniya+care1@itobuz.com', 'Itobuz#1234');
      console.log("oppo oppo ",authToken);
      
    } catch (error) {
      console.error('Login failed:', error);
    }

  });
  for (const assessmentStatus in SurveyStatusTypePatient) {
  test(`Get Patient Survey List for Counselor for assessment type : ${SurveyStatusTypePatient[assessmentStatus]}`, async () => {
    
    console.log('yguygfugyug',authToken);
    
    if (!authToken) {
      throw new Error('Authentication token not available');

    }

    try {
      const result = await apolloClient.query<{ pretaaHealthGetPatientSurveysForCounsellor: GetPatientSurveysForCounsellor }>({
        query: getPatientSurveyList,
        variables: {
            patientId: "02e5a20a-d649-4970-a6a5-6b4b9078fd8e",
          searchPhrase: "",
          skip: 0,
          status: SurveyStatusTypePatient[assessmentStatus],
          take: 50,
          },
        context: {
          headers: {
            Authorization: `Bearer ${authToken}`,

          },
        },
      });
      console.log('iiiiiii',result.data);
      expect(result.data).toBeDefined();
      expect(result).not.toHaveProperty("errors");
      expect(result.data?.pretaaHealthGetPatientSurveysForCounsellor).not.toBe(undefined);
    } catch (error) {
      console.error('GraphQL query failed:', error);
    }

  });
}
});