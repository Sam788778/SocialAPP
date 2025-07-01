import { userAPI } from "../../api/api";
import { ParseProfile, ParseStatus } from "../../localStorage";

const GET_PROFILE = 'GET_PROFILE';
const GET_STATUS = 'GET_STATUS'

const initState = {
    profile: ParseProfile(),
    status: ParseStatus(),
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state;
    }
}

const getProfileAC = (profile) => ({ type: GET_PROFILE, payload: profile })
const getStatusAC = (status) => ({ type: GET_STATUS, payload: status })

const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        userAPI.getUser(id)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('profile', JSON.stringify(res.data))
                dispatch(getProfileAC(res.data));
            })
    }
}

export const ChangePhotoThunkCreator = (file, id) => {
    return (dispatch) => {
        userAPI.ChangePhoto(file)
            .then((res) => {
                console.log(res)
                dispatch(getProfileThunkCreator(id))
            })
    }
}

export const getStatusThunkCreator = (id) => {
    return (dispatch) => {
        userAPI.getStatus(id)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('status', JSON.stringify(res.data))
                dispatch(getStatusAC(res.data))
            })
    }
}

export const UpdateStatusThunkCreator = (status, id) => {
    return (dispatch) => {
        userAPI.UpdateStatus(status)
            .then((res) => {
                console.log(res.data)
                dispatch(getStatusThunkCreator(id))
            })
    }
}

export { profileReducer, getProfileAC, getProfileThunkCreator };