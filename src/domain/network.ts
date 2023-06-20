import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {Logger} from './logger';

export class Newtwork {
  private http: AxiosInstance;
  private static instance: Newtwork;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
    });
    this.interceptors();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Newtwork();
    }

    return this.instance;
  }

  private interceptors() {
    this.http.interceptors.request.use((req: InternalAxiosRequestConfig) => {
      const access_token =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGQ4ZTBkYTA5MDdhYzdlMjI1MDkyNTk2ZjBmMTBlMyIsInN1YiI6IjVkMzhiNDVlMzk3NTYxMDAxMGZlNzc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wp1i_Mq8G0AjL4loObAjPjGjl5-P6lh3dgJVH9hRiKs';
      req.headers.setAuthorization(
        new AxiosHeaders({Authorization: `Bearer ${access_token}`})
      );
      return req;
    });

    this.http.interceptors.response.use((response: AxiosResponse) => {
      if (response.status < 200 || response.status > 299) {
        Logger.error('HTTP ERROR ::', response);
      }

      if (
        response.status === 401 &&
        !response.config.url?.endsWith('/auth/token') &&
        !response.config._retry
      ) {
        response.config._retry = true;
        // TODO - Try regresh token
        axios.request(response.config);
      }

      return response;
    });
  }

  async request<R>(args: AxiosRequestConfig) {
    try {
      const result = await this.http.request<R>({...args});
      return result;
    } catch (error) {
      Logger.error('HTTP ERROR: ', error);
      throw error;
    }
  }
}
