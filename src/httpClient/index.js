import axios from 'axios';
import atob from 'atob';

const API_URL = process.env.PUBLIC_API_URL;
const API_AUTH_BASE64 = process.env.PUBLIC_API_AUTH_BASE64;

let httpClient;

export const initializeHttpClient = () => {
  if (httpClient) {
    // console.log('httpClient instance exists', httpClient);
    return httpClient;
  }

  const _httpClient = axios.create({
    baseURL: API_URL,
    headers: {
      ...(API_AUTH_BASE64 ? { Authorization: atob(API_AUTH_BASE64) } : {}),
    },
    proxy: false,
  });

  _httpClient.interceptors.request.use(
    (config) =>
      // console.log('httpClient request', config);
      config,
    (error) => {
      // Do something with request error
      console.log('httpClient request error', error);
      return Promise.reject(error);
    },
  );

  _httpClient.interceptors.response.use(
    (response) =>
      // Any status code that lie within the range of 2xx cause this function to trigger
      // console.log('httpClient response', response);
      response,
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      console.log('httpClient response error', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // TODO
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser
        // and an instance of http.ClientRequest in node.js
        // TODO
      } else {
        // Something happened in setting up request that triggered an Error
        // TODO
      }

      return Promise.reject(error);
    },
  );

  httpClient = _httpClient;

  return _httpClient;
};
