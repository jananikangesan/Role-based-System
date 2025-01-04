import axios from "axios";

const URL = 'http://localhost:8082';

export const registerCompany = (company) => {
  const token = localStorage.getItem('token');  
  
  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.post(`${URL}/company-register`, company, 
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}
