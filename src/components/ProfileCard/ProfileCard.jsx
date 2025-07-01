import React from 'react'

import styles from './ProfileCard.module.css'
import userIMG from '../../assets/user.png'
import { useDispatch } from 'react-redux'
import { ChangePhotoThunkCreator } from '../../store/reducers/profileReduser';

const ProfileCard = ({ profile, id, showInput }) => {
    const dispatch = useDispatch()

    if (!profile) return null;
    const contacts = profile.contacts;

    const ChangePhoto = (e) => {
        const files = e.target.files[0]
        dispatch(ChangePhotoThunkCreator(files, id))
    }

    return (
        <div className={styles.profileCard}>
            <img src={profile.photos?.large || userIMG} alt="User" />
            {
                showInput && (
                    <label className={styles.fileLabel}>
                        Change Photo
                        <input
                            className={styles.file}
                            type="file"
                            onChange={ChangePhoto}
                        />
                    </label>
                )
            }
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
        </div>
    );
};

export default ProfileCard