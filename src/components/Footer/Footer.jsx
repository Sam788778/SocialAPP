import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p className={styles.text}>© 2023 Your Company Name. All rights reserved.</p>
        <ul className={styles.links}>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Footer