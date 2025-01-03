import axios from "axios";

const URL='http://localhost:8082';


export const userSignUp=(user)=>{
    return axios.post(URL+"/register",user);
}

export const userLogin=(user)=>{
    return axios.post(URL+"/login",user);
}