import FeaturedPosts from '@/components/home-page/featered-posts';
import Hero from '@/components/home-page/hero';
import { Fragment } from 'react';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes bulding fullstack react apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero => Present our ourselves
// 2) Featured Posts
