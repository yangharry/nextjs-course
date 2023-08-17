import Layout from '@/components/layout/layout';
// import Notification from '@/components/ui/notification';
import { NotificationContextProvider } from '@/store/notification-context';
import '@/styles/globals.css';

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta name="viewport" content="inital-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
