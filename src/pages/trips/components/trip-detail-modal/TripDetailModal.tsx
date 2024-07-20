import CompleteTripToggle from 'src/features/trips/complete-trip/ui/CompleteTripToggle';
import { Trip } from 'src/modules/trips/domain/Trip.Entity';
import { Modal } from 'src/shared/ui/components/elements/Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  trip?: Trip;
};

export function TripDetailModal({ isOpen, trip, onClose }: Props) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header title={''} className="absolute top-2 right-2" onClose={onClose} />
      {!!trip && (
        <div className="space-y-4 divide-y">
          <div className="space-y-4">
            <div className="flex-1 flex h-full overflow-hidden">
              <img src={trip.photoUrl} alt={trip.title} className=" object-cover w-full" />
            </div>
            <CompleteTripToggle tripId={trip.id} isCompleted={trip.isCompleted} />
            <h2 className="text-3xl">{trip.title}</h2>
            <div>{trip.introduction || trip.description}</div>
          </div>
          <div>
            <div className="text-2xl mt-4">Itinerary</div>
            <div className="py-3">
              <ul className="list-disc list-inside space-y-2 ">
                {trip.itinerary.map((item, index) => (
                  <div key={index}>
                    <div className=" space-y-1 ">
                      <div className="text-md">{`Day ${item.day}: ${item.location}`}</div>
                      <div className="text-gray-400">{item.description}</div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
