'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ClinetProjectPage() {
  const params = useParams();
  const router = useRouter();
  console.log(params);

  function loadProjectHandler() {
    router.push('/clients/max/projecta');
  }

  return (
    <div>
      <h1>The Project of a Given Clinet</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
