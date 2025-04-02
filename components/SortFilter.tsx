'use client';

import { useState } from 'react';
import filterStyles from './FiltersContainer.module.css';

interface SortFilterProps {
  onSortChange: (sortOrder: string) => void;
}

export default function SortFilter({ onSortChange }: SortFilterProps) {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOrder(value);
    onSortChange(value);
  };

  return (
    <select 
      value={sortOrder}
      onChange={handleChange}
      className={filterStyles.select}
    >
      <option value="asc">Alphabetical Asc</option>
      <option value="desc">Alphabetical Desc</option>
    </select>
  );
}