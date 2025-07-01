import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { logOutThunkCreator } from '../../store/reducers/loginReduser';
import { useDispatch } from 'react-redux';

import userIMG from '../../assets/user.png'
import styles from './Nav.module.css'
import { TbLogout2 } from "react-icons/tb";

const Nav = () => {
  const userId = useSelector(state => state.login.userId)
  const profile = useSelector(state => state.profilePage.profile)
  const dispatch = useDispatch()

  const LogOut = () => {
    dispatch(logOutThunkCreator())
    return <Navigate to={'/'} />
  }

  return (
    <nav className={styles.nav}>
      <img
        src="https://avatars.mds.yandex.net/i?id=1cb41681ff1d77d996be57f0acce07b4eac3c219-10868638-images-thumbs&n=13"
        alt=""
        className={styles.image}
      />

      <NavLink to="/users" className={styles.link}>Users</NavLink>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <TbLogout2 
          onClick={LogOut}
          style={{
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        {!userId ? (
          <NavLink className={styles.link} to='/login'>Login</NavLink>
        ) : (
          <NavLink 
            to={`/userprofile/${userId}`} 
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              overflow: 'hidden',
              display: 'block'
            }}
          >
            <img
              src={profile?.photos?.small || userIMG}
              alt="User Avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Nav