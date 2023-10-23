import React from 'react'
import styles from './header.module.css'

export default function Header() {


  return (
    <div className={styles.header}>
        <div className={styles.navbar}>
            <span className={styles.logo}>Carousel</span>
            <div className="menu">
                <span className={styles['menu-item']}>
                    Home</span>
                <span className={styles['menu-item']}>
                    Link</span>
                <span className={styles['menu-item']}>
                    Disabled
                </span>
            </div>
        </div>
    </div>
  )
}
