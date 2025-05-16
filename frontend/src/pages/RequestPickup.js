import { useState } from 'react';

export default function RequestPickup() {
  const [form, setForm] = useState({ material: '', quantity: 0, address: '' });

  const submit = async () => {
    await fetch('/api/pickups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Pickup Requested');
  };

  return (
    <div>
      <h2>Request Pickup</h2>
      <input placeholder="Material" onChange={e => setForm({ ...form, material: e.target.value })} />
      <input placeholder="Quantity" type="number" onChange={e => setForm({ ...form, quantity: +e.target.value })} />
      <input placeholder="Address" onChange={e => setForm({ ...form, address: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
