import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
export function ExtendedCard({ title, imageUrl, text }) {
    return (
        <div className={styles.card_container}>
            <img className={styles.profile_picture} src={imageUrl} alt={`${title} Profile`} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

// eslint-disable-next-line react/prop-types
export function CompressedCard({ title, imageUrl }) {
    return (
        <div className={styles['card_container_compr']}>
            <img className={styles['profile_picture_compr']} src={imageUrl} alt={`${title} Profile`} />
            <h2 className={styles['title_compr']}>{title}</h2>
        </div>
    );
}