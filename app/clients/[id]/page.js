'use client';

import { useParams } from 'next/navigation';

export default function ClinetProjectPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>The Project of a Given Clinet</h1>
    </div>
  );
}
