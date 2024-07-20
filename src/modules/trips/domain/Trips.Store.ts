import { Trip } from './Trip.Entity';

export interface TripsStore {
  trips: Trip[];
  loadTrips(trips: Trip[]): void;
  addTrip(tripParams: Omit<Trip, 'id' | 'isCompleted'>): void;
  editTrip(tripParams: Omit<Trip, 'isCompleted'>): void;
  deleteTrip(tripId: string): void;
  toggleTripCompletion(tripId: string): void;
  getUpcomingTrips(): Trip[];
  getCompletedTrips(): Trip[];
  getSearchedTrips(searchText: string): Trip[];
}
