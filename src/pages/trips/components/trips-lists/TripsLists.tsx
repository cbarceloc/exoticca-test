import { useLoadTripsOnMount } from 'src/features/trips/load-trips/application/useLoadTripsOnMount';
import { useShowTripModal } from 'src/features/trips/show-trip/application/useShowTripModal';
import { useTripsStore } from 'src/modules/trips/application/trips-store';
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from 'src/shared/ui/components/elements/TabsBar';
import { TripDetailModal } from '../trip-detail-modal/TripDetailModal';
import TripsList from './TripsList';

type Props = {
  searchedText: string;
};
export default function TripsLists({ searchedText }: Props) {
  useLoadTripsOnMount();
  const { trips, getCompletedTrips, getUpcomingTrips, getSearchedTrips } = useTripsStore();
  const { showTrip, setShowTripId, isShowTripModalOpen, closeShowTripModal } =
    useShowTripModal(trips);

  return (
    <div className="flex flex-col max-w-[600px] ">
      {searchedText.length > 0 ? (
        <TripsList trips={getSearchedTrips(searchedText)} onClickShowTrip={setShowTripId} />
      ) : (
        <TabGroup className={'items-center flex flex-col'}>
          <TabList className={'my-4'}>
            <Tab>All</Tab>
            <Tab>Upcoming</Tab>
            <Tab>Completed</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TripsList trips={trips} onClickShowTrip={setShowTripId} />
            </TabPanel>
            <TabPanel>
              <TripsList trips={getUpcomingTrips()} onClickShowTrip={setShowTripId} />
            </TabPanel>
            <TabPanel>
              <TripsList trips={getCompletedTrips()} onClickShowTrip={setShowTripId} />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      )}

      <TripDetailModal isOpen={isShowTripModalOpen} onClose={closeShowTripModal} trip={showTrip} />
    </div>
  );
}
