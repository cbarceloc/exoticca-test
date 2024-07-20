import { createZustandTripsStore } from 'src/modules/trips/infrastructure/ZustandTrips.Store';
import { TripsPage } from 'src/pages/trips/TripsPage';
import { fakeTripsRepository } from 'test/mocks/fakeTripsRepository';
import { customRender, screen, user, waitForElementToBeRemoved } from 'test/testUtils';

describe('Feature: Create Trip', () => {
  it('should see form on click create', async () => {
    // GIVEN: we are in the list of trips page

    customRender(
      <TripsPage
        deps={{
          tripsRepository: fakeTripsRepository,
          tripsStore: createZustandTripsStore([]),
        }}
      />
    );
    // WHEN: we click on create trip
    const createTripButton = screen.getByRole('button', { name: /create trip/i });

    await user.click(createTripButton);

    // THEN: we can see the form
    screen.getByRole('textbox', { name: /name/i });
    screen.getByRole('textbox', { name: /description/i });
    screen.getByRole('textbox', { name: /introduction/i });
    screen.getByRole('textbox', { name: /image/i });
  });

  it('should create a trip after filling the form', async () => {
    // GIVEN: we are in the list of trips page
    customRender(
      <TripsPage
        deps={{
          tripsRepository: fakeTripsRepository,
          tripsStore: createZustandTripsStore([]),
        }}
      />
    );

    // WHEN: we click on create trip
    const createTripButton = screen.getByRole('button', { name: /create trip/i });

    await user.click(createTripButton);

    // THEN: we can see the form
    screen.getByText(/new trip/i);
    screen.getByRole('textbox', { name: /name/i });
    screen.getByRole('textbox', { name: /description/i });
    screen.getByRole('textbox', { name: /introduction/i });
    screen.getByRole('textbox', { name: /image/i });

    // WHEN: we fill the form
    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Portugal');
    await user.type(screen.getByRole('textbox', { name: /description/i }), 'Portugal is awesome');
    await user.type(screen.getByRole('textbox', { name: /introduction/i }), 'Come to Portugal');
    await user.type(screen.getByRole('textbox', { name: /image/i }), 'https://myimage.com');
    await user.type(screen.getByPlaceholderText(/location/i), 'Lisoba');
    await user.type(screen.getByPlaceholderText(/description/i), 'First stop: Lisboa');

    // AND: we click on save
    await user.click(screen.getByRole('button', { name: /save/i }));

    // THEN: we can not see the form any more
    await waitForElementToBeRemoved(() => screen.queryByText('New trip'));
    expect(screen.queryByRole('textbox', { name: /name/i })).not.toBeInTheDocument();
    //ADN: we can see the trip in the list
    screen.getByText(/introduction for portugal trip/i);
    screen.getByText(/introduction for spain trip/i);
  });
});
