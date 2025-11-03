import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex-1">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onSearch(q); }}
          className="w-full border rounded-md px-3 py-2 focus:outline-none"
          placeholder="Search services, vendors, or cities..."
        />
        <button
          onClick={() => onSearch(q)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
        >
          🔍
        </button>
      </div>
    </div>
  );
}
