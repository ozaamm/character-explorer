import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import characters from '@/data/characters.json';
import styles from './character-detail.module.css';

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}) {
  const character = characters.find(c => c.id === params.id);
  
  return {
    title: character ? `${character.name} | Marvel Rivals` : 'Character Not Found',
    description: character ? character.description : ''
  };
}

export async function generateStaticParams() {
  return characters.map((character) => ({
    id: character.id
  }));
}

export default function CharacterDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const character = characters.find(c => c.id === params.id);

  if (!character) {
    notFound();
  }

  return (
    <div className={styles.characterPage}>
      <div className={styles.characterDetail}>
        <div className={styles.characterImageContainer}>
          <div className={styles.characterImage}>
            <Image 
              src={character.fullbody_image} 
              alt={character.name} 
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.characterName}>{character.name}</h1>
          <p className={styles.characterRealName}>{character.real_name}</p>
          
          <div className={styles.infoSection}>
            <h2 className={styles.infoSectionTitle}>Role</h2>
            <p className={styles.infoSectionContent}>{character.role}</p>
          </div>
          <div className={styles.infoSection}>
            <h2 className={styles.infoSectionTitle}>Description</h2>
            <p className={styles.infoSectionContent}>{character.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.abilitiesDetail}>
        {character.abilities && character.abilities.length > 0 && (
          <div className={styles.abilitiesContainer}>
            <h2 className={styles.sectionTitle}>Abilities</h2>
            <div className={styles.abilitiesList}>
              {character.abilities.map((ability, index) => (
                <div key={index} className={styles.abilityItem}>
                  {ability}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}