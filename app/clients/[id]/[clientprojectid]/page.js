'use client';

import { useParams } from 'next/navigation';

export default function SelectedClinetProjectPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}
