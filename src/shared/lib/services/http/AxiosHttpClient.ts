import Axios, { AxiosInstance } from 'axios';
import { SupportedLanguage } from '../i18n/i18n';
import { HttpClient, RequestConfig } from './HttpClient';

type ApiConfiguration = {
  baseUrl: string;
  headers?: Record<string, string>;
};
export default class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  protected handleServiceError(error: Error): void {
    throw error;
  }

  protected createAxiosClient(apiConfiguration?: ApiConfiguration): AxiosInstance {
    return Axios.create({
      baseURL: apiConfiguration?.baseUrl,
      responseType: 'json' as const,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        Accept: 'application/json',
        ...apiConfiguration?.headers,
      },
    });
  }

  constructor(apiConfiguration?: ApiConfiguration) {
    this.client = this.createAxiosClient(apiConfiguration);
  }

  setAccessToken(accessToken: string): void {
    this.client.defaults.headers.Authorization = `Bearer ${accessToken}`;
  }
  getAccessToken(): string | null {
    return this.client.defaults.headers.Authorization as string | null;
  }
  clearAccessToken(): void {
    this.client.defaults.headers.Authorization = null;
  }
  setLanguage(lang: SupportedLanguage): void {
    this.client.defaults.headers['Accept-Language'] = lang;
  }
  getLanguage(): SupportedLanguage {
    return this.client.defaults.headers['Accept-Language'] as SupportedLanguage;
  }

  setBaseUrl(baseUrl: string): void {
    this.client.defaults.baseURL = baseUrl;
  }
  setHeader(key: string, value: string): void {
    this.client.defaults.headers[key] = value;
  }

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: RequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.post<TResponse>(path, payload, config)
        : await this.client.post<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      this.handleServiceError(error);
    }
    return {} as TResponse;
  }

  async patch<TRequest, TResponse>(path: string, payload: TRequest): Promise<TResponse> {
    try {
      const response = await this.client.patch<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      this.handleServiceError(error);
    }
    return {} as TResponse;
  }

  async put<TRequest, TResponse>(path: string, payload: TRequest): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      this.handleServiceError(error);
    }
    return {} as TResponse;
  }

  async get<TResponse>(path: string, config?: { params?: object }): Promise<TResponse> {
    try {
      const response = await this.client.get<TResponse>(path, config);
      return response.data;
    } catch (error) {
      this.handleServiceError(error);
    }
    return {} as TResponse;
  }
}
