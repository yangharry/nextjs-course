import EventList from '@/components/events/event-list';
// import { getAllEvents } from '@/dummy-data';
import { getAllEvents } from '@/helpers/api-util';
import EventsSearch from './event-serch';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

export default function AllEventsPage(props) {
  const router = useRouter();
  // const events = getAllEvents();
  const events = props.events;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
