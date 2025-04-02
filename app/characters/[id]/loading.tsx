import styles from './character-detail.module.css'

export default function Loading() {
    return (
        <div className={styles.characterPage}>
            <div className={styles.characterDetail}>
                <div className={styles.characterImageContainer}>
                    <div className={styles.characterImage}>
                    </div>
                </div>

                <div className={styles.infoContainer}>
                </div>
            </div>
            <div className={styles.abilitiesDetail}>
                <div className={styles.abilitiesContainer}>
                </div>
            </div>
        </div>
    );
}