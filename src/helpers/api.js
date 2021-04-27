import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = 'http://localhost:3000';
  }

  get(url) {
    return this.http.get(url);
  }

  post(url, body) {
    return this.http.post(url, body);
  }
}

export default new ApiService();