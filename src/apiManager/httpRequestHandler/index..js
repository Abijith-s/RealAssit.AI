import axios from "axios";

export const httpGETRequest = (url) =>{
    return axios.get(url);
};