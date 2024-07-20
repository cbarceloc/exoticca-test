import { tripsService } from 'src/modules/trips/domain/Trip.Entity';
import { TripsRepository } from 'src/modules/trips/domain/Trips.Repository';

const fakeTrips = [
  {
    title: 'Portugal trip name',
    description: 'Description for portugal trip',
    photoUrl: 'https://example.com/portugal.jpg',
    itinerary: [
      { location: 'Porto', day: 1, description: 'Visit the city' },
      { location: 'Lisbon', day: 2, description: 'Visit the capital' },
    ],
    introduction: 'Introduction for portugal trip',
  },
  {
    title: 'Spain trip name',
    description: 'Description for spain trip',
    photoUrl: 'https://example.com/spain.jpg',
    itinerary: [],
    introduction: 'Introduction for spain trip',
  },
  {
    title: 'Italy trip name',
    description: 'Description for italy trip',
    photoUrl: 'https://example.com/italy.jpg',
    itinerary: [],
    introduction: 'Introduction for italy trip',
  },
];

export const fakeTripsRepository: TripsRepository = {
  listTrips: () => {
    return Promise.resolve(fakeTrips.map(tripsService.createTrip));
  },
};
