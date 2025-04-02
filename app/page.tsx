'use client';

import { useState } from 'react';
import styles from './home.module.css';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import characters from '../data/characters.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter characters based on search term
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort characters alphabetically by name
  const sortedCharacters = [...filteredCharacters].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main className={styles.container}>
      <SearchBar onSearch={handleSearch} />

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