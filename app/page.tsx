import styles from './home.module.css';
import CharacterCard from '../components/CharacterCard';
import characters from '../data/characters.json';

// Sort characters alphabetically by name
const sortedCharacters = [...characters].sort((a, b) => 
  a.name.localeCompare(b.name)
);

export default function Home() {
  return (
    <main className={styles.container}>      
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
    </main>
  );
}