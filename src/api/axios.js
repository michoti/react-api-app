import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
});

axiosClient.interceptors.response.use((resp) => {
    return resp;
});

export default axiosClient;