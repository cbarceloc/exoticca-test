import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const tripsRootKey = 'trips';
export const tripsQueryKeys = createQueryKeyStore({
  [tripsRootKey]: {
    getTrips: {
      queryKey: null,
    },
  },
});
