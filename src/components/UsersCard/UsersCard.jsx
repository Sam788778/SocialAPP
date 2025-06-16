import React from 'react'
import userIMG from '../../assets/user.png'
import styles from './UsersCard.module.css'

const UsersCard = ({user}) => {
    
  return (
    <div className={styles.userCard}>
        <h2>{user.name}</h2>
        <img src={user.photos.large ? user.photos.large : userIMG } />
        <button>follow</button>
    </div>
  )
}

export default UsersCard