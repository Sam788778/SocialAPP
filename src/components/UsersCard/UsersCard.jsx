import React from 'react'
import userIMG from '../../assets/user.png'
import styles from './UsersCard.module.css'
import { NavLink } from 'react-router-dom'

const UsersCard = ({user}) => {
    
  return (
    <div className={styles.userCard}>
        <h2>{user.name}</h2>
        <NavLink to={`/userprofile/${user.id}`}><img src={user.photos.large ? user.photos.large : userIMG } /></NavLink>
        <button>follow</button>
    </div>
  )
}

export default UsersCard