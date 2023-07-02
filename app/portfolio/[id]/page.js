'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';

export default function PortfolioProjectPage() {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  console.log(pathname);
  console.log(params);
  console.log(searchParams.get('id'));

  return (
    <div>
      <h1>The Profolio Project Page</h1>
    </div>
  );
}
