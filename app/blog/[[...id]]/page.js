'use client';

import { useParams } from 'next/navigation';

export default function BlogPostsPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
