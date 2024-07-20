import { Trip } from 'src/modules/trips/domain/Trip.Entity';
import TripListItem from './TripListItem';

type Props = {
  trips: Trip[];
  onClickShowTrip: (tripId: string) => void;
};
export default function TripsList({ trips, onClickShowTrip }: Props) {
  return (
    <ul className="space-y-4">
      {trips.map((trip, index) => (
        <TripListItem key={index} trip={trip} onClickShowTrip={() => onClickShowTrip(trip.id)} />
      ))}
    </ul>
  );
}
