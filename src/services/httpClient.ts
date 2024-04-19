import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = 'https://gorest.co.in/';

export const httpClient = axios.create({
  baseURL: BASE_URL,
});

const defaultConfig = (config: AxiosRequestConfig) => {
  config.headers = {
    'Content-Type': 'application/json',
    // Authorization: 'Client-ID G0xbK_zRq65nfgIMhCBir0SMuBQ5UmS7IVybMENIoZ4',
    // 'Accept-Version': 'v1',
  };
  return config;
};

httpClient.interceptors.request.use(async config => {
  return defaultConfig(config);
});
