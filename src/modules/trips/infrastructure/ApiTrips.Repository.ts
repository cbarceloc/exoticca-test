import AxiosHttpClient from 'src/shared/lib/services/http/AxiosHttpClient';
import { HttpClient } from 'src/shared/lib/services/http/HttpClient';
import { Trip } from '../domain/Trip.Entity';
import { TripsRepository } from '../domain/Trips.Repository';

type TripDTO = {
  id: string;
  title: string;
  description: string;
  introduction?: string;
  photo_url: string;
  status: 'todo' | 'done';
  itinerary: {
    location: string;
    description: string;
    day: number;
  }[];
};
export class ApiTripsRepository implements TripsRepository {
  httpClient: HttpClient;
  constructor({ apiUrl }: { apiUrl: string }) {
    this.httpClient = new AxiosHttpClient({ baseUrl: apiUrl });
  }
  listTrips = async () => {
    const tripsDTO = await this.httpClient.get<TripDTO[]>('/travels');
    return tripsDTO.map(this.mapTripFromDTO);
  };
  mapTripFromDTO = (tripDTO: TripDTO): Trip => {
    return {
      id: tripDTO.id,
      title: tripDTO.title,
      description: tripDTO.description,
      introduction: tripDTO.introduction,
      photoUrl: tripDTO.photo_url,
      itinerary: tripDTO.itinerary.map((stop) => ({
        location: stop.location,
        description: stop.description,
        day: stop.day,
      })),
      isCompleted: tripDTO.status === 'done',
    };
  };
}
