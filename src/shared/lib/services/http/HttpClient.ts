type HttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: HttpHeaders;
};

export interface HttpClient {
  post<TRequest, TResponse>(
    path: string,
    object?: TRequest,
    config?: RequestConfig
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
  put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
  get<TResponse>(path: string, config?: { params?: object }): Promise<TResponse>;
  setAccessToken(accessToken: string): void;
  getAccessToken(): string | null;
  clearAccessToken(): void;
  setLanguage(lang: string): void;
  getLanguage(): string;
  setBaseUrl(baseUrl: string): void;
  setHeader(key: string, value: string): void;
}
