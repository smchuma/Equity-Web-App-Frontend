import axios from "axios";

const BASEURL = "http://localhost:3500";

const axiosInstance = axios.create({
  baseURL: BASEURL,
});

const axiosPrivate = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export { axiosInstance as default, axiosPrivate };
