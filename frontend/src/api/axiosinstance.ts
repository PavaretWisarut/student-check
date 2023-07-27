import axios from "axios";
// import Cookies from "universal-cookie";

// const cookies = new Cookies()
const API_dev = import.meta.env.VITE_API_DEV

const instance = axios.create({
  baseURL: API_dev,
  headers: { 'Content-Type': 'application/json' },
});

// console.log("acToken from instance axios : " , cookies.get("accesstoken"));

export default instance