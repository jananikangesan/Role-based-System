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


export const viewProfile=(email)=>{
    const token = localStorage.getItem('token');  
  
  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.get(`${URL}/profile/${email}`, 
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}

export const createService=(service)=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.post(`${URL}/partner-service/create`, service,
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}

export const getServices=(email)=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.get(`${URL}/partner-service/getAll/${email}`, 
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}


export const updateService=(id,service)=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.put(`${URL}/partner-service/update/${id}`,service, 
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}


export const deleteService=(id)=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.delete(`${URL}/partner-service/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}

export const getServiceById=(id)=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.get(`${URL}/partner-service/get/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}


export const getCompanyServices=()=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.get(`${URL}/companies-services`, 
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}

export const getAllServices=()=>{
  const token = localStorage.getItem('token');  

  if (!token) {
    throw new Error('No token found. User is not authenticated.');
  }

  return axios.get(`${URL}/partner-service/getAllService`, 
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}





