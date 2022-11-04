import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    // "content-Type": "application/json",
  },
});

export default request;
