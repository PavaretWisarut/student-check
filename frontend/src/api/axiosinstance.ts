import axios from "axios";

const API_dev = import.meta.env.VITE_API_DEV

const instance = axios.create({
  baseURL: API_dev,
  headers: { 'Content-Type': 'application/json' },
});


export default instance