import axios from "axios";

const API = axios.create({ baseURL: "http:141.136.47.162/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    console.log("inside api insterceptors");
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (formData) => API.post("/user/login", formData);
export const signup = (formData) => API.post("/user/create", formData);


export const getcolleges = (formData) =>
  API.post("/user/collegelist", formData);

export const authenticate = (formData)=> API.post("/authenticate",formData)