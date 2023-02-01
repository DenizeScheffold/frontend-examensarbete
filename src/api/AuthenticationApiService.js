import axios from "./ApiClient";

export const executeBasicAuthenticationService
    = (token) => axios.get(`/basicauth`
    ,{
        headers: {
            Authorization: token
        }
    }
    )

export const executeJwtAuthenticationService
    = (username, password) => 
    axios.post(`/authenticate`,{username,password})