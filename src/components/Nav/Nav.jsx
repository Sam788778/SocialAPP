import React from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userIMG from '../../assets/user.png'

const Nav = () => {
  const userId = useSelector(state => state.login.userId)
  const profile = useSelector(state => state.profilePage.profile)

  return (
    <nav className={styles.nav}>
      <img
        src="https://avatars.mds.yandex.net/i?id=1cb41681ff1d77d996be57f0acce07b4eac3c219-10868638-images-thumbs&n=13"
        alt=""
        className={styles.image}
      />

      <NavLink to="/users" className={styles.link}>Users</NavLink>

      {!userId ? (
        <NavLink className={styles.link} to='/login'>Login</NavLink>
      ) : (
        <NavLink to={`/userprofile/${userId}`} className={styles.avatar}>
          <img
            src={profile?.photos?.small || userIMG}
            alt="User Avatar"
          />
        </NavLink>
      )}
    </nav>
  )
}

export default Nav