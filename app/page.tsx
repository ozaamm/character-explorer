'use client';

import { useState } from 'react';
import styles from './home.module.css';
import filterStyles from '../components/FiltersContainer.module.css';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import RoleFilter from '../components/RoleFilter';
import SortFilter from '../components/SortFilter';
import characters from '../data/characters.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Extract unique roles for the filter
  const uniqueRoles = Array.from(new Set(characters.map(char => char.role)));

  // Filter characters based on search term and role
  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === '' || character.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  // Sort characters by name
  const sortedCharacters = [...filteredCharacters].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  return (
    <main className={styles.container}>
      <div className={filterStyles.filtersContainer}>
        <SearchBar onSearch={handleSearch} />
        <RoleFilter onRoleChange={handleRoleChange} roles={uniqueRoles} />
        <SortFilter onSortChange={handleSortChange} />
      </div>

      <div className={styles.grid}>
        {sortedCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            role={character.role}
            thumbnailImage={character.thumbnail_image}
          />
        ))}
      </div>

      {sortedCharacters.length === 0 && (
        <p className={styles.noResults}>No characters found matching "{searchTerm}"</p>
      )}
    </main>
  );
}