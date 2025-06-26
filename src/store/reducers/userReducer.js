import { socialAPI } from '../../api/api';

const GET_USERS = 'GET_USERS';
const IS_LOADING = 'IS_LOADING';
const CHANGE_PAGE = 'CHANGE_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';

const initState = {
    users: [],
    isLoading: false,
    totalCount: 0,
    totalPageCount: 100,
    page: 1,
    pagesPerGroup: 10,
    currentGroup: 0
}


const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }
        case TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.payload
            }
        }
        case SET_CURRENT_GROUP: {
            return {
                ...state,
                currentGroup: action.payload,
                page: action.payload * state.pagesPerGroup + 1
            }
        }
        default:
            return state
    }
}

const getUsersAC = (data) => ({ type: GET_USERS, payload: data })
const isLoadingAC = (data) => ({ type: IS_LOADING, payload: data })
const totalCountAC = (data) => ({ type: TOTAL_COUNT, payload: data })
export const setCurrentGroupAC = (group) => ({ type: SET_CURRENT_GROUP, payload: group })
export const changePageAC = (page) => ({ type: CHANGE_PAGE, payload: page })

export const getUsersThunkCreator = (page) => {
    return (dispatch) => {
        dispatch(isLoadingAC(true))
        socialAPI.getUsers(page)
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
                dispatch(isLoadingAC(false))
                dispatch(totalCountAC(res.data.totalCount))
            })
    }
}

export default usersReducer