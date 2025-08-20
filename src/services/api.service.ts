import axios from "axios";
import { authRequestInterceptor } from "@/interceptors/auth/auth.interceptor";

const api = axios.create(
    {
        baseURL: "http://localhost:8080/api/v1",
        headers: {
            "Content-Type": "application/json",
        },
    }
)

api.interceptors.request.use(authRequestInterceptor);

export default api;