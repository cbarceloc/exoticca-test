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

export const tripsService = {
  // --- create ---
  loadTrips(trips: Trip[]): Trip[] {
    return trips;
  },
  addTrip(trips: Trip[], trip: Omit<Trip, 'id' | 'isCompleted'>): Trip[] {
    return [...trips, { ...trip, id: uuidv4(), isCompleted: false }];
  },
  editTrip(trips: Trip[], trip: Omit<Trip, 'isCompleted'>): Trip[] {
    if (trips.find((t) => t.id === trip.id) === undefined) {
      throw new Error(`Trip with id ${trip.id} not found`);
    }
    return trips.map((t) => (t.id === trip.id ? { ...t, ...trip } : t));
  },
  deleteTrip(trips: Trip[], tripId: string): Trip[] {
    if (trips.find((t) => t.id === tripId) === undefined) {
      throw new Error(`Trip with id ${tripId} not found`);
    }
    return trips.filter((t) => t.id !== tripId);
  },
};
export type Trip = z.infer<typeof tripSchema>;
