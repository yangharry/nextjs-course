import EventList from '@/components/events/event-list';
// import { getAllEvents } from '@/dummy-data';
import { getAllEvents } from '@/helpers/api-util';
import EventsSearch from './event-serch';
import { useRouter } from 'next/router';

export default function AllEventsPage(props) {
  const router = useRouter();
  // const events = getAllEvents();
  const events = props.events;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
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
