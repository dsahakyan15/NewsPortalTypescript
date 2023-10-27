import React from 'react'
import styles from './Card.module.css'
import { CardProps } from './Card.interface'


const NewsCard: React.FC<CardProps> = ({ id, title, content, image, publishDate }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
            <p className={styles.date}>Published on: {publishDate}</p>
            <a href='' className={styles.read_more}>Read more</a>
        </div>
    )
}
export default NewsCard