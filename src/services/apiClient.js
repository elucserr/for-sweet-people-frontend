import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
    console.log(process.env.REACT_APP_BACKEND_URI);
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
    return this.apiClient.post("/signup", body);
  }

  getProtected() {
    return this.apiClient.get("/protected");
  }

  getAllRecordsBlood() {
    return this.apiClient.get("/blood");
  }

  createRecordBlood(body) {
    return this.apiClient.post("/blood", body);
  }

  deleteRecordBlood(id) {
    return this.apiClient.delete(`/blood/${id}`);
  }

  getAllRecordsDiet() {
    return this.apiClient.get("/diet");
  }

  createRecordDiet(body) {
    return this.apiClient.post("/diet", body);
  }

  deleteRecordDiet(id) {
    return this.apiClient.delete(`/diet/${id}`);
  }
  getAllRecordsActivity() {
    return this.apiClient.get("/activity");
  }

  createRecordActivity(body) {
    return this.apiClient.post("/activity", body);
  }

  deleteRecordActivity(id) {
    return this.apiClient.delete(`/activity/${id}`);
  }
  getAllRecordsMedicine() {
    return this.apiClient.get("/medicine");
  }

  createRecordMedicine(body) {
    return this.apiClient.post("/medicine", body);
  }

  deleteRecordMedicine(id) {
    return this.apiClient.delete(`/medicine/${id}`);
  }
}

const apiClient = new ApiClient();
export default apiClient;
