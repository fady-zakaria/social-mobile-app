import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Config from 'react-native-config';
import {Alert} from 'react-native';

const BASE_URL = 'https://gorest.co.in/';

export const httpClient = axios.create({
  // baseURL: Config.BASE_URL,
  baseURL: BASE_URL,
});

const defaultConfig = (config: AxiosRequestConfig) => {
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Config.API_TOKEN}`,
  };
  return config;
};

httpClient.interceptors.request.use(config => {
  return defaultConfig(config);
});

const errorInterceptor = (error: {message: string | undefined}) => {
  Alert.alert('Error', error.message);
  return Promise.reject(error);
};

const responseInterseptor = (respone: AxiosResponse<any, any>) => {
  return Promise.resolve(respone);
};

httpClient.interceptors.response.use(
  response => responseInterseptor(response),
  error => errorInterceptor(error),
);
