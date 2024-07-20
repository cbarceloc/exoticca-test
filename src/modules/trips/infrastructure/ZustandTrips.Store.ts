import { StoreApi, createStore } from 'src/shared/lib/services/store/Store';
import { Trip, tripsService } from '../domain/Trip.Entity';
import { TripsStore } from '../domain/Trips.Store';

export function createZustandTripsStore(initialTrips?: Trip[]): StoreApi<TripsStore> {
  const defaultTrips: Trip[] = [];
  const store = createStore<TripsStore>((set, get) => ({
    trips: initialTrips || defaultTrips,
    // --- create ---
    loadTrips: (trips: Trip[]) => {
      const nextTrips = tripsService.loadTrips(trips);
      set({ trips: nextTrips });
      return nextTrips;
    },
    addTrip: (trip: Trip) => {
      const trips = tripsService.addTrip(get().trips, trip);
      set({ trips });
      return trips;
    },
    editTrip: (trip: Omit<Trip, 'isCompleted'>) => {
      const trips = tripsService.editTrip(get().trips, trip);
      set({ trips });
      return trips;
    },
    deleteTrip: (tripId: string) => {
      const trips = tripsService.deleteTrip(get().trips, tripId);
      set({ trips });
      return trips;
    },
    toggleTripCompletion: (tripId: string) => {
      const trips = tripsService.toggleTripCompletion(get().trips, tripId);
      set({ trips });
      return trips;
    },
    getUpcomingTrips: () => tripsService.getUpcomingTrips(get().trips),
    getCompletedTrips: () => tripsService.getCompletedTrips(get().trips),
    getSearchedTrips: (searchText: string) => tripsService.searchTrips(get().trips, searchText),
  }));

  return store;
}
