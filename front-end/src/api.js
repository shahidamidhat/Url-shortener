import axios from "axios";

export function GetUserURL(){
    return axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`)
}

export function PostUserURL(data){
    return axios.post(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`,data)
}