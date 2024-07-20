import { useTripsStore } from 'src/modules/trips/application/trips-store';
import { Trip } from 'src/modules/trips/domain/Trip.Entity';
import useToggleState from 'src/shared/lib/hooks/useToggleState';
import Button from 'src/shared/ui/components/elements/Button';
import { TripFormModal } from '../../shared/ui/TripFormModal';

export default function CreateTripButton() {
  const [isModalOpen, toggleModal] = useToggleState(false);
  const { addTrip } = useTripsStore();
  function handleSave(tripParams: Omit<Trip, 'id' | 'isCompleted'>) {
    toggleModal();
    addTrip(tripParams);
  }

  return (
    <>
      <Button
        label="Create trip"
        onClick={toggleModal}
        variant="contained"
        className="bg-white text-black px-4 py-2"
      />
      <TripFormModal isOpen={isModalOpen} onSave={handleSave} onClose={toggleModal} />
    </>
  );
}
