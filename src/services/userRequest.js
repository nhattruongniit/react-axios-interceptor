import axios from 'axios';

const requestConfig = {
  baseURL: 'https://jsonplaceholder.typicode123.com',
  timeout: 5000,
};

class UserRequest {
  constructor() {
    this.api = axios.create(requestConfig)
  }
  
  async get(url, config) {
    return this.api.get(url, config);
  }
}

const userRequest = new UserRequest();

export default userRequest;