import axios from "axios";

const BASEURL = "https://equity-backend.bravewave-974a5699.westus2.azurecontainerapps.io";

const axiosInstance = axios.create({
  baseURL: BASEURL,
});

const axiosPrivate = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export { axiosInstance as default, axiosPrivate };

