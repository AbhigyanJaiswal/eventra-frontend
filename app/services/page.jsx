'use client';
import { useMemo, useState } from 'react';
import ServicesLayout from '@/components/ServicesLayout';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import ServiceCard from '@/components/ServiceCard';
import servicesData from '@/data/services';

export default function ServicesPage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');

  const categories = useMemo(() => {
    const set = new Set(servicesData.map(s => s.category));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    let list = servicesData.slice();

    if (query) {
      const q = query.toLowerCase();
      list = list.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      );
    }

    if (filters.category && filters.category !== 'All') {
      list = list.filter(s => s.category === filters.category);
    }
    if (filters.minPrice != null) list = list.filter(s => s.price >= filters.minPrice);
    if (filters.maxPrice != null) list = list.filter(s => s.price <= filters.maxPrice);

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating-desc') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [query, filters, sortBy]);

  return (
    <ServicesLayout>
      <div className="mb-4">
        <SearchBar onSearch={setQuery} />
      </div>

      <div className="md:flex md:space-x-6">
        <div className="md:w-64">
          <FilterSidebar categories={categories} onFilter={setFilters} />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>{filtered.length} results</div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="relevance">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
}
    