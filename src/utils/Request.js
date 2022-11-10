import axios from 'axios';

export const getToken = () => localStorage.getItem('token') ? localStorage.getItem('token') : null

export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Authorization' : `Bearer ${getToken()}`
    }
})
