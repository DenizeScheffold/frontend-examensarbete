import axios from "./ApiClient";


export const executeBasicAuthenticationService
    = (token) => axios.get(`/authenticate`
    ,{
        headers: {
            Authorization: token
        }
    }
    ) 
    

export const executeJwtAuthenticationService
    = (username, password) => 
    axios.post(`/authenticate`,{ username, password})