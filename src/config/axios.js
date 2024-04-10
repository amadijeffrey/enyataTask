import axios from "axios";

export const axiosAuth = () => {
  const url = 'https://swapi.dev/api/';


    return axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
  
};