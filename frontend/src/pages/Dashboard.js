import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    fetch('/api/pickups').then(res => res.json()).then(setPickups);
  }, []);

  return (
    <div>
      <h2>Pickup Requests</h2>
      <ul>
        {pickups.map(p => <li key={p._id}>{p.material} - {p.status}</li>)}
      </ul>
    </div>
  );
}
