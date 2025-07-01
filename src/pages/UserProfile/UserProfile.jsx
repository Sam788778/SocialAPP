import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunkCreator, getStatusThunkCreator } from '../../store/reducers/profileReduser'

import styles from './UserProfile.module.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const UserProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { profile, status } = useSelector((state) => state.profilePage)
  const { userId } = useSelector((state) => state.login)

  useEffect(() => {
    if (id) {
      dispatch(getProfileThunkCreator(id))
      dispatch(getStatusThunkCreator(id))
    }
  }, [id, dispatch])

  if (!userId) {
    return <Navigate to="/" replace />
  }

  const isOwner = id === String(userId)

  return (
    <div className={styles.userProfile}>
      <h1 className={styles.Name}>
        {isOwner ? 'My Profile' : profile?.fullName}
      </h1>
      <ProfileCard profile={profile} id={id} showInput={isOwner} status={status} />
    </div>
  )
}

export default UserProfile