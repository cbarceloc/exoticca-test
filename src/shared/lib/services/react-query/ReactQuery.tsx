import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { handleErrorCode, handleErrorMessage } from '../../utils/errorUtils';
import { i18next } from '../i18n/i18n';
import { notifyError } from '../notifications-manager/NotificationsManager';

const queryConfig: DefaultOptions = {
  queries: {},
  mutations: {
    onError: () => {
      notifyError(i18next.t('common:error.unknown_error'));
    },
  },
};

export function useMutationWithErrorHandling<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options: UseMutationOptions<TData, TError, TVariables, TContext>) {
  const mutation: UseMutationResult<TData, TError, TVariables, TContext> = useMutation({
    ...options,
    onError: (error) => {
      const errorCode = handleErrorCode(error);
      const errorMessage = handleErrorMessage(error);
      switch (errorCode) {
        case 400:
        case 404:
        case 500:
          notifyError(i18next.t('common:error.request_failed_error'));
          break;
        default:
          notifyError(i18next.t('common:error.request_failed_error'));
          throw Error(errorMessage);
      }
    },
  });

  return mutation;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractFnReturnType<FnType extends ((...args: any) => any) | (() => any)> = Awaited<
  ReturnType<FnType>
>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = new QueryClient({ defaultOptions: queryConfig });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { QueryErrorResetBoundary, ReactQueryProvider, useMutation, useQuery };
