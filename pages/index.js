import FeaturedPosts from '@/components/home-page/featered-posts';
import Hero from '@/components/home-page/hero';
import { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero => Present our ourselves
// 2) Featured Posts
