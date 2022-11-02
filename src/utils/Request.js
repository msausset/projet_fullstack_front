import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:3333/",
  headers: {
    /*     "content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true", */
  },
});

export default request;
