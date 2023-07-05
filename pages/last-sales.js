import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR('https://nextjs-course-235d0-default-rtdb.firebaseio.com/sales.json', (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    const transformedSales = [];
    if (data) {
      for (let key in data) {
        transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
      }
    }
    setSales(transformedSales);
  }, [data]);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch('https://nextjs-course-235d0-default-rtdb.firebaseio.com/sales.json')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const transformedSales = [];
  //         for (let key in data) {
  //           transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>No data yet</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username}-${sale.volume}
        </li>
      ))}
    </ul>
  );
}
