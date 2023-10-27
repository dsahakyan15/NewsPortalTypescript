import React from 'react'
import UserDropSetting from '../UserDropSettings'
import styles from './header.module.css'

const Header: React.FC =()=>{


  return (
    <header className={styles.header}>
        <nav className={styles.menu}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <UserDropSetting/>
    </header>
  )
}

export default Header


// id,title,img,content,publishDay