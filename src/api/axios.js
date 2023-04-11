import axios from "axios";

const BASEURL = "https://equity-backend.blackmoss-55678a4d.westus2.azurecontainerapps.io";

const axiosInstance = axios.create({
  baseURL: BASEURL,
});

const axiosPrivate = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export { axiosInstance as default, axiosPrivate };
