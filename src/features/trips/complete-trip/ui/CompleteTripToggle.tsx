import { useTripsStore } from 'src/modules/trips/application/trips-store';
import Toggle from 'src/shared/ui/components/elements/Toggle';

type Props = {
  tripId: string;
  isCompleted: boolean;
};
export default function CompleteTripToggle({ tripId, isCompleted }: Props) {
  const { toggleTripCompletion } = useTripsStore();
  function handleToggle() {
    toggleTripCompletion(tripId);
  }
  return (
    <>
      <Toggle label="Mark as completed" onChange={handleToggle} isEnabled={isCompleted} />
    </>
  );
}
