import React from 'react'
import userIMG from '../../assets/user.png'
import styles from './UserPage.module.css'


const UserPage = ({user}) => {
  return (
    <div className={styles.userPage}>
        <img src={user.photos.large ? user.photos.large : userIMG } />
        <h2>{user.name}</h2>
        <button>follow</button>
    </div>
  )
}

export default UserPage