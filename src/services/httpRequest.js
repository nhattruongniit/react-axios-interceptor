import axios from 'axios';

const requestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
};

export const httpInstance =  axios.create(requestConfig);

class HttpRequest {
  async get(url, config) {
    return httpInstance.get(url, config);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;