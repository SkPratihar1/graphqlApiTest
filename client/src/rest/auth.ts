
import { GetUser, PretaaAdminLogin, PretaaAdminLoginVariables, UserTypeRole } from '../health-generatedTypes';



import axios, { AxiosError } from 'axios';


export const login = async (email: string, password: string) => {
  const headers = {
    // Include any required headers here
    // 'Content-Type': 'application/json',
    // Add any other headers as needed
};
  try {

    const response = await axios.post('https://healthtech-core.x-studio.io/user/login', { email, password });
    console.log("hhhhhhh",{ token: response.data.loginToken });
    let  token= response.data.loginToken
    return token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        
        console.error('Login failed with status code:', axiosError.response.status);
        console.error('Response data:', axiosError.response.data);
        
        
        const responseData = axiosError.response.data as { error?: string };
        const errorMessage = responseData.error || 'Unknown error';
        throw new Error(errorMessage);
      } else if (axiosError.request) {
       
        console.error('No response received from the server');
        throw new Error('No response received from the server');
      } else {
       
        console.error('Error:', axiosError.message);
        throw new Error('Error setting up request');
      }
    } else {
      
      console.error('Non-Axios error occurred:', error);
      throw new Error('Non-Axios error occurred');
    }
  }
};

// export function getCredentials({ userTypeRole }: { userTypeRole?: UserTypeRole,  }) {
//   let credentials: { email: string; password: string } | null = null;

//   if (userTypeRole === UserTypeRole.COUNSELLOR ) {
//     credentials = {
//         email: "healthtech+jiniya+care@itobuz.com",
//         password: "Itobuz#1234" 
//     };
//   } else if(userTypeRole === UserTypeRole.PATIENT) {
//     credentials = {
//         email:"healthtech+pratihar+simon1@itobuz.com",
//         password: "pR3t@A1234"
//     };
//   }  else if(userTypeRole === UserTypeRole.FACILITY_ADMIN) {
//     credentials = {
//         email:"healthtech+sneh+super@itobuz.com",
//         password: "Itobuz#1234"
//     };
//   } else if(userTypeRole === UserTypeRole.SUPER_ADMIN) {
//     credentials = {
//         email: "healthtech+sneh+super@itobuz.com",
//         password: "Itobuz#1234"
//     };
//   }
//   return credentials;
// }

