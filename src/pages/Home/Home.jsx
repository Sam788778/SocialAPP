import React from 'react'
import styles from './Home.module.css'
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className={styles.home}>
      <Nav />
      <h1 className={styles.text}>Welcome to Instagram</h1>
      <Footer />
    </div>
  )
}

export default Home