import { PropsWithChildren } from 'react';

import { TripsRepositoryProvider } from 'src/modules/trips/application/trips-repository';
import { TripsStoreProvider } from 'src/modules/trips/application/trips-store';
import { TripsDeps } from './dependencyInjection';

export type TripsProviderProps = PropsWithChildren<TripsDeps>;

export const TripsProviders = ({ children, tripsRepository, tripsStore }: TripsProviderProps) => {
  return (
    <TripsStoreProvider store={tripsStore}>
      <TripsRepositoryProvider repository={tripsRepository}>{children}</TripsRepositoryProvider>
    </TripsStoreProvider>
  );
};
