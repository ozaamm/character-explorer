import Link from 'next/link';
import Image from 'next/image';
import styles from './CharacterCard.module.css';

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
        <Image
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