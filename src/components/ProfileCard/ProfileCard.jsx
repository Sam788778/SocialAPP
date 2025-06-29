import React from 'react'

import { Navigate } from 'react-router-dom';
import { logOutThunkCreator } from '../../store/reducers/loginReduser';
import { useDispatch } from 'react-redux';

import styles from './ProfileCard.module.css'
import userIMG from '../../assets/user.png'

const ProfileCard = ({ profile }) => {
    if (!profile) return null;

    const dispatch = useDispatch()

    const contacts = profile.contacts;

    const LogOut = () => {
        dispatch(logOutThunkCreator())
        return <Navigate to={'/'} />
    }

    return (
        <div className={styles.profileCard}>
            <img src={profile.photos?.large || userIMG} alt="User" />

            <p>Status: {profile.aboutMe || 'No status'}</p>
            <p>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</p>
            <p>Job Description: {profile.lookingForAJobDescription || 'No description'}</p>

            <h3>Contacts:</h3>
            <div className={styles.contactItem}>GitHub: {contacts?.github || '---'}</div>
            <div className={styles.contactItem}>VK: {contacts?.vk || '---'}</div>
            <div className={styles.contactItem}>Facebook: {contacts?.facebook || '---'}</div>
            <div className={styles.contactItem}>Instagram: {contacts?.instagram || '---'}</div>
            <div className={styles.contactItem}>Twitter: {contacts?.twitter || '---'}</div>
            <div className={styles.contactItem}>Website: {contacts?.website || '---'}</div>
            <div className={styles.contactItem}>YouTube: {contacts?.youtube || '---'}</div>
            <div className={styles.contactItem}>MainLink: {contacts?.mainLink || '---'}</div>

            <button className={styles.logOut} onClick={LogOut}>Delete Account</button>
        </div>
    );
};

export default ProfileCard