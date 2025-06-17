import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunkCreator } from '../../store/reducers/userReducer'

import UsersCard from '../../components/UsersCard/UsersCard'

import styles from './UsersPage.module.css'
import UserPage from '../userPage/UserPage'

const UsersPage = () => {
  const dispatch = useDispatch()

  const { users, isLoading } = useSelector((state) => state.usersPage)

  useEffect(() => {
    dispatch(getUsersThunkCreator())
  }, [])

  return (
    <div className={styles.UsersPage}>
      {
        isLoading ? <div className={styles.loaderContainer}><span className={styles.loader}></span> </div> :
          users?.map((user) => {
            return <UsersCard user={user} key={user.id} />
          })
      }
    </div>
  )
}

export default UsersPage