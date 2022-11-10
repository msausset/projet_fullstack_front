import axios from 'axios';

export const getToken = () =>
  localStorage.getItem("token") ? localStorage.getItem("token") : null;

export const request = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    // "content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

