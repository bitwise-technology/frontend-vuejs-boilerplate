import axios from "axios";

const api = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

api.defaults.params.key = "AIzaSyBYsYZ1anEOqDaGu_Oxlnyjgp3YEk9bSGk";
api.defaults.headers.post["Content-Type"] = "application/json";

export { api };
