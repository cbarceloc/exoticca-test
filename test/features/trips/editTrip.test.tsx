import { createZustandTripsStore } from 'src/modules/trips/infrastructure/ZustandTrips.Store';
import { TripsPage } from 'src/pages/trips/TripsPage';
import { fakeTripsRepository } from 'test/mocks/fakeTripsRepository';
import { customRender, screen, user, within } from 'test/testUtils';

describe('Feature: Edit Trip', () => {
  it('should see form on click edit', async () => {
    // GIVEN: we are in the list of trips page

    customRender(
      <TripsPage
        deps={{
          tripsRepository: fakeTripsRepository,
          tripsStore: createZustandTripsStore([]),
        }}
      />
    );
    // WHEN: we click on edit trip
    const tripNameFound = await screen.findByText(/introduction for portugal trip/i);

    const tripListItem = tripNameFound.closest('li');
    if (!tripListItem) throw new Error('Trip list item not found');
    const editButton = within(tripListItem).getByRole('button', { name: /edit/i });
    await user.click(editButton);
    // THEN: we can see the form filled with the trip data
    screen.getByDisplayValue(/portugal trip name/i);
    screen.getByDisplayValue(/Introduction for portugal trip/i);
    screen.getByDisplayValue(/Description for portugal trip/i);
    screen.getByDisplayValue(/https:\/\/example.com\/portugal.jpg/i);
    screen.getByDisplayValue(/porto/i);
    screen.getByDisplayValue(/1/i);
    screen.getByDisplayValue(/visit the city/i);
    screen.getByDisplayValue(/lisbon/i);
    screen.getByDisplayValue(/2/i);
    screen.getByDisplayValue(/visit the capital/i);
  });
  it('should see the trip updated after editing', async () => {
    // GIVEN: we are in the edit trip form
    customRender(
      <TripsPage
        deps={{
          tripsRepository: fakeTripsRepository,
          tripsStore: createZustandTripsStore([]),
        }}
      />
    );
    const tripNameFound = await screen.findByText(/introduction for portugal trip/i);
    const tripListItem = tripNameFound.closest('li');
    if (!tripListItem) throw new Error('Trip list item not found');
    const editButton = within(tripListItem).getByRole('button', { name: /edit/i });
    await user.click(editButton);
    // WHEN: we change the data of the trip and submit the form
    const nameInput = screen.getByLabelText(/Name/i);
    await user.clear(nameInput);
    await user.type(nameInput, 'Updated name');
    const introductionInput = screen.getByLabelText(/introduction/i);
    await user.clear(introductionInput);
    await user.type(introductionInput, 'Updated introduction');
    const descriptionInput = screen.getByLabelText(/description/i);
    await user.clear(descriptionInput);
    await user.type(descriptionInput, 'Updated description');
    const photoUrlInput = screen.getByLabelText(/image/i);
    await user.clear(photoUrlInput);
    await user.type(photoUrlInput, 'https://example.com/updated.jpg');

    const saveButton = screen.getByRole('button', { name: /save/i });
    await user.click(saveButton);
    // THEN: we see the trip updated in the list of trips
    screen.getByText(/updated name/i);
    await screen.findAllByText(/updated introduction/i);
  });
});
