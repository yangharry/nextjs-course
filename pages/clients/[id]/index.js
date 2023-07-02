import { useRouter } from 'next/router';

export default function ClinetProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

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
