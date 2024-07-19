import { useEffect } from 'react';
import { useGetTripsQuery } from 'src/modules/trips/application/trips-repository';
import { useTripsStore } from 'src/modules/trips/application/trips-store';

export function useLoadTripsOnMount() {
  const tripsQuery = useGetTripsQuery();
  const tripsStore = useTripsStore();
  useEffect(() => {
    if (tripsQuery.isSuccess) {
      tripsStore.loadTrips(tripsQuery.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tripsQuery.isSuccess]);
  return { isLoading: tripsQuery.isLoading };
}
