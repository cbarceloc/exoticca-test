import CreateTripButton from 'src/features/trips/create-trip/ui/CreateTripButton';
import { createDependencies } from 'src/shared/lib/utils/depInjectionUtils';
import TripsList from '../components/TripsList';
import { TripsProviders } from './providers/TripsProviders';
import { TripsDeps, tripsDeps } from './providers/dependencyInjection';

type SourcePageProps = {
  deps?: Partial<TripsDeps>;
};

export function TripsPage({ deps }: SourcePageProps) {
  return (
    <TripsProviders {...createDependencies<TripsDeps>(tripsDeps, deps)}>
      <div className="flex flex-col p-4 items-center w-full space-y-8 ">
        <div id="header" className="p-2 bg-black  w-full rounded-md flex justify-end ">
          <CreateTripButton />
        </div>
        <TripsList />
      </div>
    </TripsProviders>
  );
}
