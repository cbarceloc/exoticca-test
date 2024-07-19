import { TripsRepository } from 'src/modules/trips/domain/Trips.Repository';
import { QueryConfig, useQuery } from 'src/shared/lib/services/react-query/ReactQuery';
import { useTripsRepository } from '..';
import { tripsQueryKeys } from './queryKeys';

type UseGetTripsOptions = {
  config?: QueryConfig<TripsRepository['listTrips']>;
};

export function useGetTripsQuery({ config }: UseGetTripsOptions = {}) {
  const tripsRepository = useTripsRepository();
  const getTripsQuery = useQuery({
    ...config,
    queryFn: () => tripsRepository.listTrips(),
    queryKey: tripsQueryKeys.trips.getTrips.queryKey,
  });
  return getTripsQuery;
}
