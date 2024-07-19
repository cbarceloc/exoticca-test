import { Trip } from './Trip.Entity';

export interface TripsRepository {
  listTrips: () => Promise<Trip[]>;
}
