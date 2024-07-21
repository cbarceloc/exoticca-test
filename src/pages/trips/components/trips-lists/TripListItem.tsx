import DeleteTripButton from 'src/features/trips/delete-trip/ui/DeleteTripButton';
import EditTripButton from 'src/features/trips/edit-trip/ui/EditTripButton';
import ShowTripButton from 'src/features/trips/show-trip/ui/ShowTripButton';
import { Trip } from 'src/modules/trips/domain/Trip.Entity';

type Props = {
  trip: Trip;
  onClickShowTrip: () => void;
};

export default function TripListItem({ trip, onClickShowTrip }: Props) {
  return (
    <div className="flex flex-row w-full border-gray-200 border space-x-3 rounded-xl overflow-hidden">
      <div className="flex-1 flex min-h-full flex-col bg-red-600 ">
        <img src={trip.photoUrl} alt={trip.title} className=" object-cover h-full w-full" />
      </div>
      <div className="flex flex-col flex-1 space-y-3 p-3">
        <h2 className="text-xl">{trip.title}</h2>
        <div className=" line-clamp-3	 ">{trip.introduction || trip.description}</div>
        <div className="flex justify-end">
          <>
            <ShowTripButton onClick={onClickShowTrip} />
            <EditTripButton trip={trip} />
            <DeleteTripButton tripId={trip.id} />
          </>
        </div>
      </div>
    </div>
  );
}
