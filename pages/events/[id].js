import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import ErrorAlert from '@/components/ui/error-alert';
// import { getEventById } from '@/dummy-data';
import { getEventById, getAllEvents, getFeaturedEvents } from '@/helpers/api-util';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function EventDetailPage(props) {
  // const router = useRouter();

  // const eventId = router.query.id;
  // const event = getEventById(eventId);

  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  // const events = await getAllEvents();
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}
