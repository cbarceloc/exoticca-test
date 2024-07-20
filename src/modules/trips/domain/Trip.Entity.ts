import { v4 as uuidv4 } from 'uuid';
import z from 'zod';
import { StopSchema } from './Stop.VO';

export const tripSchema = z.object({
  id: z.string(),
  title: z.string().min(2, 'Title must be at least 2 characters long'),
  introduction: z.string().max(240, 'Introduction must be at most 240 characters long').optional(),
  description: z.string().min(2, 'Description must be at least 2 characters long'),
  photoUrl: z.string().url('Photo URL must be a valid URL'),
  itinerary: z.array(StopSchema).min(1, 'Trip must have at least one stop'),
  isCompleted: z.boolean(),
});
// .refine(
//   (data) => {
//     // check that any day is skipped or repited
//     data.itinerary
//       .map((stop) => stop.day)
//       .toSorted()
//       .reduce((prev, current) => {
//         if (prev === current) {
//           throw new Error('Days must be unique and ordered');
//         }
//         return current;
//       });
//     return true;
//   },
//   {
//     message: 'Days must be unique and ordered',
//   }
// )

//.innerType();

export const tripsService = {
  createTrip(trip: Omit<Trip, 'id' | 'isCompleted'>): Trip {
    return { ...trip, id: uuidv4(), isCompleted: false };
  },
  loadTrips(trips: Trip[]): Trip[] {
    return trips;
  },
  addTrip(trips: Trip[], trip: Omit<Trip, 'id' | 'isCompleted'>): Trip[] {
    return [...trips, this.createTrip(trip)];
  },
  editTrip(trips: Trip[], editedTrip: Omit<Trip, 'isCompleted'>): Trip[] {
    if (trips.find((trip) => trip.id === editedTrip.id) === undefined) {
      throw new Error(`Trip with id ${editedTrip.id} not found`);
    }
    return trips.map((trip) => (trip.id === editedTrip.id ? { ...trip, ...editedTrip } : trip));
  },
  deleteTrip(trips: Trip[], tripId: string): Trip[] {
    if (trips.find((trip) => trip.id === tripId) === undefined) {
      throw new Error(`Trip with id ${tripId} not found`);
    }
    return trips.filter((trip) => trip.id !== tripId);
  },
  toggleTripCompletion(trips: Trip[], tripId: string): Trip[] {
    if (trips.find((trip) => trip.id === tripId) === undefined) {
      throw new Error(`Trip with id ${tripId} not found`);
    }
    return trips.map((trip) =>
      trip.id === tripId ? { ...trip, isCompleted: !trip.isCompleted } : trip
    );
  },
  getUpcomingTrips(trips: Trip[]): Trip[] {
    return trips.filter((trip) => !trip.isCompleted);
  },
  getCompletedTrips(trips: Trip[]): Trip[] {
    return trips.filter((trip) => trip.isCompleted);
  },
  searchTrips(trips: Trip[], searchText: string): Trip[] {
    return trips.filter((trip) =>
      [trip.title, trip.description, trip.introduction].some((field) => {
        return field?.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  },
};
export type Trip = z.infer<typeof tripSchema>;
