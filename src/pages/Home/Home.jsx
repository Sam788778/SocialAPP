import React from 'react'

import Login from '../../components/Login/Login'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import styles from './Home.module.css'


const Home = () => {
  const { userId } = useSelector((state) => state.login)

  console.log(userId)

  if (userId) {
    return <Navigate to={`/userprofile/${userId}`} />
  }

  return (
    <div className={styles.home}>
      <Login />
    </div>
  )
}

export default Home