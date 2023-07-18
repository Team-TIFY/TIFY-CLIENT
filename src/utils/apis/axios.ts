import axios from 'axios';

//백엔드에게 api 보내는 BASE URL
export const BASE_URL = `${window.location.origin === 'http://localhost:5173'
? 'http://54.180.57.46/api/v3/' : ''}`

export const axiosApi = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type' : 'application/json'}
});
