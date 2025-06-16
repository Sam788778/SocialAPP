import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Home from '../../pages/Home/Home'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Outlet />
            <Home />
        </div>
    )
}

export default Layout