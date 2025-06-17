import React from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <img src="https://avatars.mds.yandex.net/i?id=1cb41681ff1d77d996be57f0acce07b4eac3c219-10868638-images-thumbs&n=13" alt="" className={styles.image}/>
        <NavLink to="/users" className={styles.link}>Users</NavLink>
        <button>Login</button>
    </nav>
  )
}

export default Nav