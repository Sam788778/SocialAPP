import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunkCreator } from '../../store/reducers/profileReduser'

import userIMG from '../../assets/user.png'
import styles from './UserProfile.module.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const UserProfile = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const { profile } = useSelector((state) => state.profilePage)

  useEffect(() => {
    if (id) {
      dispatch(getProfileThunkCreator(id))
    }
  }, [id])

  return (
    <div className={styles.userProfile}>
      <h1 className={styles.Name}>
        {profile?.fullName || 'User Profile'}
      </h1>
      <ProfileCard profile={profile} />
    </div>
  )
}

export default UserProfile