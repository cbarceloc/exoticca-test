import { PropsWithChildren, Suspense } from 'react';
import { NavigationProvider } from 'src/shared/lib/services/navigation/NavigationProvider';
import { NotificationsContainer } from 'src/shared/lib/services/notifications-manager/NotificationsManager';
import { ReactQueryProvider } from 'src/shared/lib/services/react-query/ReactQuery';
import { BrowserRouter } from 'src/shared/lib/services/router/Router';
import BackdropLoader from 'src/shared/ui/components/elements/BackdropLoader';
import { AppDeps } from './dependencyInjection';

export type AppProviderProps = PropsWithChildren<AppDeps>;

export const AppProviders = ({ children, navigation }: AppProviderProps) => {
  return (
    <Suspense fallback={<BackdropLoader />}>
      <ReactQueryProvider>
        <NavigationProvider navigation={navigation}>
          <BrowserRouter>{children}</BrowserRouter>
          <NotificationsContainer />
        </NavigationProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ReactQueryProvider>
    </Suspense>
  );
};
