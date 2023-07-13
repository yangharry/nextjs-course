import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href={'/'}>
          <button>Home Page</button>
        </Link>
        <Link href={'/feedback'}>
          <button>Feedback Page</button>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
