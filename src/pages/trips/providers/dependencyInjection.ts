import { TripsRepository } from 'src/modules/trips/domain/Trips.Repository';
import { TripsStore } from 'src/modules/trips/domain/Trips.Store';
import { ApiTripsRepository } from 'src/modules/trips/infrastructure/ApiTrips.Repository';
import { createZustandTripsStore } from 'src/modules/trips/infrastructure/ZustandTrips.Store';
import { config } from 'src/shared/config';
import { StoreApi } from 'zustand';

export type TripsDeps = {
  tripsRepository: TripsRepository;
  tripsStore: StoreApi<TripsStore>;
};

export const tripsDeps: TripsDeps = {
  tripsRepository: new ApiTripsRepository({
    apiUrl: config.apiUrl,
  }),
  tripsStore: createZustandTripsStore(),
};
