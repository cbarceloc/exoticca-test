import CreateTripButton from 'src/features/trips/create-trip/ui/CreateTripButton';
import { useSearchTrips } from 'src/features/trips/search-trips/application/useSearchTrips';
import SearchInput from 'src/features/trips/search-trips/ui/SearchInput';
import { createDependencies } from 'src/shared/lib/utils/depInjectionUtils';
import TripsList from './components/trips-lists/TripsLists';
import { TripsProviders } from './providers/TripsProviders';
import { TripsDeps, tripsDeps } from './providers/dependencyInjection';

type TripsPageProps = {
  deps?: Partial<TripsDeps>;
};

export function TripsPage({ deps }: TripsPageProps) {
  const { searchText, setSearchText } = useSearchTrips();
  return (
    <TripsProviders {...createDependencies<TripsDeps>(tripsDeps, deps)}>
      <div className="flex flex-col p-4 items-center w-full space-y-8">
        <div id="header" className="p-2 bg-black  w-full rounded-md flex justify-end ">
          <CreateTripButton />
        </div>
        <div className="space-y-2 items-center flex flex-col">
          <h1 className="text-4xl">The places you dream of</h1>
          <p className="text-2xl">{"Let's live new adventures"}</p>
          <SearchInput value={searchText} onChangeText={setSearchText} />
        </div>
        <TripsList searchedText={searchText} />
      </div>
    </TripsProviders>
  );
}
