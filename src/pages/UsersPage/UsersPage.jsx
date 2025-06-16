import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socialAPI } from '../../api/api'
import { getUsersAC } from '../../store/reducers/userReducer'

import UsersCard from '../../components/UsersCard/UsersCard'

import styles from './UsersPage.module.css'

const UsersPage = () => {
  const dispatch = useDispatch()

  const {users} = useSelector((state) => state.usersPage)

  useEffect(() => {
    console.log('Fetching users...')
    socialAPI.getUsers()
      .then((res) => dispatch(getUsersAC(res.data.items)))
  }, [])

  return (
    <div className={styles.UsersPage}>
        {
          users?.map((user) => {
            return <UsersCard user={user} key={user.id}/>
          })
        }
    </div>
  )
}

export default UsersPage