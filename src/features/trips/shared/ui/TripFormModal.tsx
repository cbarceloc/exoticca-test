import { Trip } from 'src/modules/trips/domain/Trip.Entity';
import { Modal } from 'src/shared/ui/components/elements/Modal';
import TripForm from './TripForm';

type Props = {
  isOpen: boolean;
  onSave: (trip: Omit<Trip, 'id' | 'isCompleted'>) => void;
  onClose: () => void;
  trip?: Trip;
};

export function TripFormModal({ isOpen, onSave, trip, onClose }: Props) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header title={trip ? 'Edit trip' : 'New trip'} onClose={onClose} />
      <TripForm onSave={onSave} trip={trip} />
    </Modal>
  );
}
