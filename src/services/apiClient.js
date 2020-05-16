import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
  }

  whoami() {
    return this.apiClient.get("/whoami");
  }

  login(body) {
    return this.apiClient.post("/login", body);
  }

  signup(body) {
    return this.apiClient.post("/signup", body);
  }
  

  getOptions(body) {
    return this.apiClient.post("/home", body);
  }

  logout() {
    return this.apiClient.get("/logout");
  }
}

const apiClient = new ApiClient();
export default apiClient;
