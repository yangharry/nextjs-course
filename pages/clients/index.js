import Link from 'next/link';

export default function ClinetsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'menu', name: 'Manual' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
