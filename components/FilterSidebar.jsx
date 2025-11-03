import { useState } from 'react';

export default function FilterSidebar({ categories, onFilter }) {
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  function applyFilters() {
    onFilter({
      category,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
    });
  }

  return (
    <aside className="w-full md:w-64 p-4 border rounded-md bg-white">
      <h3 className="font-semibold mb-2">Filters</h3>

      <div className="mb-3">
        <label className="block text-sm">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option>All</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm">Price Range</label>
        <div className="flex space-x-2">
          <input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 border rounded px-2 py-1"
            placeholder="Min"
          />
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 border rounded px-2 py-1"
            placeholder="Max"
          />
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="mt-3 w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700"
      >
        Apply
      </button>
    </aside>
  );
}
