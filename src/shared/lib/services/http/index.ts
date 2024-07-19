import AxiosHttpClient from './AxiosHttpClient';

export const siaApiHttpClient = new AxiosHttpClient();
export const createHttpClient = () => new AxiosHttpClient();
