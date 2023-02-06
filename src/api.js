import axios from "axios";

const instance = axios.create({
  baseURL: "https://redux-ecommerce-backend.onrender.com",
});

export default instance;