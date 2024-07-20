import { useState } from 'react';
import { Trip } from 'src/modules/trips/domain/Trip.Entity';

export function useShowTripModal(trips: Trip[]) {
  const [showTripId, setShowTripId] = useState<string | null>(null);
  return {
    showTrip: trips.find((trip) => trip.id === showTripId),
    setShowTripId,
    isShowTripModalOpen: !!showTripId,
    closeShowTripModal: () => setShowTripId(null),
  };
}
