import axios from "axios";
import { getUserLocalStorage } from "../contexts/Auth/util";

export const Api = axios.create({
  baseURL: "https://reqres.in/api/",
});

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

// Api.interceptors.request.use(
//   (config) => {
//     const user = getUserLocalStorage();

//     config.headers.Authorization = user?.token;

//     return config
//    },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
