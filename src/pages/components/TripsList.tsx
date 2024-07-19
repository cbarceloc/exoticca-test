import DeleteTripButton from 'src/features/trips/delete-trip/ui/DeleteTripButton';
import EditTripButton from 'src/features/trips/edit-trip/ui/EditTripButton';
import { useLoadTripsOnMount } from 'src/features/trips/load-trips/application/useLoadTripsOnMount';
import { useTripsStore } from 'src/modules/trips/application/trips-store';
import TripListItem from '../../features/trips/show-trip/ui/TripListItem';

export default function TripsList() {
  useLoadTripsOnMount();
  const { trips } = useTripsStore();
  return (
    <div className="flex flex-col space-y-4 max-w-[600px]">
      {trips.map((trip, index) => (
        <TripListItem
          key={index}
          title={trip.title}
          introduction={trip.introduction}
          description={trip.description}
          photoUrl={trip.photoUrl}
          actions={
            <>
              <EditTripButton trip={trip} />
              <DeleteTripButton tripId={trip.id} />
            </>
          }
        />
      ))}
    </div>
  );
}
