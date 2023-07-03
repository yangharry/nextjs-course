import EventList from '@/components/events/event-list';
import { getAllEvents } from '@/dummy-data';
import EventsSearch from './event-serch';
import { useRouter } from 'next/router';

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

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
