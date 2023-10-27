import React from 'react'
import Card from '../Card'
import styles from './NewsList.module.css'
import { CardProps } from '../Card/Card.interface'
import { NewsListProps } from './NewsList.interface'



const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <div className={styles.list}>
            {
                news.map((item: CardProps) =>
                    <div className={styles.card}>
                        <Card {...item}></Card>
                    </div>
                )
            }
        </div>
    )
}
export default NewsList