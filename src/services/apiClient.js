  import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
    console.log(process.env.REACT_APP_BACKEND_URI)
  }
 
  //Auth

  login(body) {
    return this.apiClient.post("/login", body);
  }

  logout() {
    return this.apiClient.get("/logout");
  }

  whoami() {
    return this.apiClient.get("/whoami");
  }

  signup(body) {
    return this.apiClient.post('/signup', body);
  }

  getProtected() {
    return this.apiClient.get("/protected");
  }

  getAllRecords() {
    return this.apiClient.get("/blood");
  }

  createRecord(body) {
    return this.apiClient.post("/blood", body);
  }

  deleteRecord(id) {
    return this.apiClient.delete(`/blood/${id}`);
  }
}

const apiClient = new ApiClient();
export default apiClient;