import { createStoreProviderAndHook } from 'src/shared/lib/context/StoreContext';
import { TripsStore } from '../../domain/Trips.Store';

export const [TripsStoreProvider, useTripsStore] =
  createStoreProviderAndHook<TripsStore>('TripsStore');
