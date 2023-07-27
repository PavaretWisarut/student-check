import axios from "axios";
// import Cookies from "universal-cookie";

// const cookies = new Cookies()

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {'Content-Type': 'application/json'},
  });

// console.log("acToken from instance axios : " , cookies.get("accesstoken"));

export default instance