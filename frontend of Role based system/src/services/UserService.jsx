import axios from "axios";

const URL='http://localhost:8082';


export const userSignUp=(user)=>{
    return axios.post(URL+"/register",user);
}

export const userLogin=(user)=>{
    return axios.post(URL+"/login",user);
}

export const getUsers=()=>{
    const token = localStorage.getItem('token');  
  
    if (!token) {
      throw new Error('No token found. User is not authenticated.');
    }
  
    return axios.get(`${URL}/user/getAll`, 
      {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }
    );
  }

  export const deleteUser=(id)=>{
    const token = localStorage.getItem('token');  
  
    if (!token) {
      throw new Error('No token found. User is not authenticated.');
    }
  
    return axios.delete(`${URL}/user/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }
    );
  }
  