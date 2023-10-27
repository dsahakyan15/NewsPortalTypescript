import React, { useState } from 'react'
import styles from './UserDropSetting.module.css'


const UserDropSetting: React.FC = () => {



  const [dropOpen, setDropOpen] = useState(false)


  return (
    <div>
      <div className={styles.userImg}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="avatar" width={'50px'} height={'50px'} />
      </div>
      <div className="dropdownMenu">
        <span className="anchor" onClick={() => setDropOpen(!dropOpen)}>Tik</span>
        <ul>
          <li>
            <a href="">One</a>
          </li>
          <li>
            <a href="">Two</a>
          </li>
          <li>
            <a href="">Three</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default UserDropSetting