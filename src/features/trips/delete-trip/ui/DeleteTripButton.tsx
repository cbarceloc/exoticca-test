import { useTripsStore } from 'src/modules/trips/application/trips-store';
import Button from 'src/shared/ui/components/elements/Button';

type Props = {
  tripId: string;
};
export default function DeleteTripButton({ tripId }: Props) {
  const { deleteTrip } = useTripsStore();

  function handleDeleteTrip() {
    deleteTrip(tripId);
  }
  return (
    <>
      <Button label="Delete" onClick={handleDeleteTrip} variant="text" className=" text-red-500 " />
    </>
  );
}
