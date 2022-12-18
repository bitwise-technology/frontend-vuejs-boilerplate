import axios from "axios";

const api = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

api.defaults.params.key = import.meta.env.VITE_API_KEY;
api.defaults.headers.post["Content-Type"] = "application/json";

export { api };
