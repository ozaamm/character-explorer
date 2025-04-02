import Link from 'next/link';
import styles from './CharacterCard.module.css';
import OptimizedImage from './OptimizedImage';

interface CharacterCardProps {
  id: string;
  name: string;
  role: string;
  thumbnailImage: string;
}

export default function CharacterCard({ id, name, role, thumbnailImage }: CharacterCardProps) {
  return (
    <Link href={`/characters/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <OptimizedImage
          src={thumbnailImage}
          alt={name}
          width={256}
          height={256}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.role}>{role}</p>
      </div>
    </Link>
  );
}