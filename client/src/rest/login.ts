
// import { getUserQuery } from '../graphql/user.query';
// import { GetUser, PretaaAdminLogin, PretaaAdminLoginVariables, UserTypeRole } from '../health-generatedTypes';
// //import { axiosClient } from './axiosClient';
// //import { graphqlClient } from '../graphql/client';
// //import { LoginResponse } from '../lib/loginPayload.interface';
// //import { pretaaAdminLoginQuery } from '../graphql/pretaaAdminLogin.query';





// export async function logIn({ userTypeRole }: { userTypeRole : UserTypeRole }) {
//     const response = (await axiosClient({}).post('/user/web/login', getCredentials({ userTypeRole }))) as LoginResponse;
//     return response;
//   }
  
//   export function getCredentials({ userTypeRole }: { userTypeRole?: UserTypeRole,  }) {
//     let credentials: { email: string; password: string } | null = null;
  
//     if (userTypeRole === UserTypeRole.COUNSELLOR ) {
//       credentials = {
//           email: "healthtech+jiniya+care@itobuz.com",
//           password: "Itobuz#1234" 
//       };
//     } else if(userTypeRole === UserTypeRole.PATIENT) {
//       credentials = {
//           email:"healthtech+pratihar+simon1@itobuz.com",
//           password: "pR3t@A1234"
//       };
//     }  else if(userTypeRole === UserTypeRole.FACILITY_ADMIN) {
//       credentials = {
//           email:"healthtech+sneh+super@itobuz.com",
//           password: "Itobuz#1234"
//       };
//     } else if(userTypeRole === UserTypeRole.SUPER_ADMIN) {
//       credentials = {
//           email: "healthtech+sneh+super@itobuz.com",
//           password: "Itobuz#1234"
//       };
//     }
//     return credentials;
//   }
  
  // export async function authenticatedGraphqlClient(payload: { userTypeRole: UserTypeRole, userCredentials?: any, facilityId?: string  }) {
  //   let response: any;
  
  //   response = await logIn({ userTypeRole: payload.userTypeRole });
  
  //   const userData = await graphqlClient({ token: response.loginToken }).query<GetUser>({
  //     query: getUserQuery,
  //   });
  
  //   const selectedFacilityId: string[] = [];
  
  //   const currentFacilities = userData?.data?.pretaaHealthCurrentUser?.userFacilities || [];
  //   if (currentFacilities.length && !payload.facilityId && process.env.defaultSelectedFacilityID) {
  //     selectedFacilityId.push(process.env.defaultSelectedFacilityID);
  //   } else if (payload.facilityId) {
  //     selectedFacilityId.push(payload.facilityId);
  //   }
  
  //   let selectedRole = payload.userTypeRole;
  
  //   return graphqlClient({ token: response.loginToken, selectedFacilityId, selectedRole })
  // }