import React from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <img src="https://avatars.mds.yandex.net/i?id=b30f8cb0cefba57c775d89899f2084d1d747ea09-8221537-images-thumbs&n=13" alt="" className={styles.image}/>
        <NavLink to="/users" className={styles.link}>Users</NavLink>
        <button>Login</button>
    </nav>
  )
}

export default Nav