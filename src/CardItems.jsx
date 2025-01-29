import React from "react";
import styles from './Card/Card.module.css'

function CardItem({title, imageUrl, text }){
    return(
        <>
                <div className={styles.cardContainer}>
                    <img className={styles.profilePicture} src={imageUrl} alt={`${title} Profile`}></img>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                </div>
        </>
    );
}

export default CardItem