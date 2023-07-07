import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
// import { getFilteredEvents } from '@/dummy-data';
import { getFilteredEvents } from '@/helpers/api-util';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import useSWR from 'swr';

export default function FilteredEventsPage(props) {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSWR('https://nextjs-course-235d0-default-rtdb.firebaseio.com/events.json', (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (let key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
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

  if (isNaN(numYaer) || isNaN(numMonth) || numYaer > 2030 || numYaer < 2021 || numMonth < 1 || numMonth > 12 || error) {
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

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYaer && eventDate.getMonth() === numMonth - 1;
  });

  // const filteredEvents = getFilteredEvents({
  //   year: numYaer,
  //   month: numMonth,
  // });
  // const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
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

  // const date = new Date(numYaer, numMonth - 1);
  const date = new Date(numYaer, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYaer = filterData[0];
//   const filteredMonth = filterData[1];
//   const numYaer = +filteredYaer;
//   const numMonth = +filteredMonth;

//   if (isNaN(numYaer) || isNaN(numMonth) || numYaer > 2030 || numYaer < 2021 || numMonth < 1 || numMonth > 12) {
//     return {
//       props: { hasError: true },
//       // notFound: true,
//       // redirect:{
//       //   destination: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYaer,
//     month: numMonth,
//   });
//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYaer,
//         month: numMonth,
//       },
//     },
//   };
// }
