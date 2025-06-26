import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageAC, getUsersThunkCreator, setCurrentGroupAC } from '../../store/reducers/userReducer'

import UsersCard from '../../components/UsersCard/UsersCard'

import styles from './UsersPage.module.css'

const UsersPage = () => {

  const dispatch = useDispatch()

  const { users, isLoading, totalCount, totalPageCount, page, currentGroup, pagesPerGroup } = useSelector((state) => state.usersPage)

  const btnCount = Math.ceil(totalCount / totalPageCount)

  let btns = []

  for (let i = 1; i <= btnCount; i++) {
    btns.push(i)
  }

  useEffect(() => {
    dispatch(getUsersThunkCreator(page))
  }, [page])

  const changePage = (p) => {
    dispatch(changePageAC(p))
  }

  const start = currentGroup * pagesPerGroup
  const end = Math.min(start + pagesPerGroup, btnCount)

  const handlePrev = () => {
    if (currentGroup > 0) {
      dispatch(setCurrentGroupAC(currentGroup - 1))
      const newStartPage = (currentGroup - 1) * pagesPerGroup + 1
      dispatch(changePageAC(newStartPage))
      dispatch(getUsersThunkCreator(newStartPage))
    }
  }

  const handleNext = () => {
    if ((currentGroup + 1) * pagesPerGroup < btnCount) {
      const newStartPage = (currentGroup + 1) * pagesPerGroup + 1
      dispatch(setCurrentGroupAC(currentGroup + 1))
      dispatch(changePageAC(newStartPage))
      dispatch(getUsersThunkCreator(newStartPage))
    }
  }

  const maxGroup = Math.floor(btnCount / pagesPerGroup) - 1

  return (
    <div className={styles.UsersPage}>
      {
        isLoading ? <div className={styles.loaderContainer}><span className={styles.loader}></span> </div> :
          users?.map((user) => {
            return <UsersCard user={user} key={user.id} />
          })
      }
      <div className={styles.pagination}>
        {currentGroup > 0 && (
          <button onClick={handlePrev} className={styles.prev}>{'<'}</button>
        )}
        {
          btns.slice(start, end).map((btn) => {
            return <button
              key={btn}
              className={styles.btn}
              onClick={() => changePage(btn)}
            >
              {btn}
            </button>
          })
        }
        {currentGroup < maxGroup && (
          <button onClick={handleNext} className={styles.next}>{'>'}</button>
        )}
      </div>
    </div>
  )
}

export default UsersPage