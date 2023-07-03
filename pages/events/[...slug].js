import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Fragment>
        <p className="center">Loading...</p>;
      </Fragment>
    );
  }

  const filteredYaer = filterData[0];
  const filteredMonth = filterData[1];
  const numYaer = +filteredYaer;
  const numMonth = +filteredMonth;

  if (isNaN(numYaer) || isNaN(numMonth) || numYaer > 2030 || numYaer < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYaer,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYaer, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}
