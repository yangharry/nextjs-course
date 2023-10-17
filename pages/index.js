import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '@/components/home-page/featered-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max's Blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// 1) Hero => Present our ourselves
// 2) Featured Posts
