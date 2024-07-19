import axios, { AxiosError, AxiosHeaders } from 'axios';

type ApiError = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isApiErrorResponse(res: any): res is ApiError {
  return (
    res &&
    'type' in res &&
    'title' in res &&
    'status' in res &&
    'detail' in res &&
    'instance' in res
  );
}

export const handleErrorMessage = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    return 'Unknown error';
  }

  if (!error.response) {
    return error.message;
  }

  if (!isApiErrorResponse(error.response.data)) {
    return error.message;
  }

  return error.response.data.detail;
};

export const handleErrorCode = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    throw Error('Unknown error');
  }

  if (!error.response) {
    return error.status;
  }

  if (!isApiErrorResponse(error.response.data)) {
    return error.response.status;
  }

  return error.response.data.status;
};

export function createFakeApiError() {
  return new AxiosError('NOT IMPLEMENTED', '404', undefined, undefined, {
    data: {},
    status: 404,
    statusText: 'Not found',
    headers: {},
    config: { headers: new AxiosHeaders() },
  });
}
