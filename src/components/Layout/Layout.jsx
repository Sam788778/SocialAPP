import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Nav from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer.jsx'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout