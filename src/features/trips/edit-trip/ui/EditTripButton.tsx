import { useTripsStore } from 'src/modules/trips/application/trips-store';
import { Trip } from 'src/modules/trips/domain/Trip.Entity';
import useToggleState from 'src/shared/lib/hooks/useToggleState';
import Button from 'src/shared/ui/components/elements/Button';
import { TripFormModal } from '../../shared/ui/TripFormModal';

type Props = {
  trip: Trip;
};
export default function EditTripButton({ trip }: Props) {
  const [isModalOpen, toggleModal] = useToggleState(false);
  const { editTrip } = useTripsStore();
  function handleSave(tripParams: Omit<Trip, 'id' | 'isCompleted'>) {
    toggleModal();
    editTrip({ ...tripParams, id: trip.id });
  }

  return (
    <>
      <Button label="Edit" onClick={toggleModal} variant="text" className="bg-white text-black " />
      <TripFormModal isOpen={isModalOpen} onSave={handleSave} trip={trip} onClose={toggleModal} />
    </>
  );
}
