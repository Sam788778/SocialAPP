import { socialAPI, userAPI } from "../../api/api";

const GET_PROFILE = 'GET_PROFILE';

const initState = {
    profile: null,   
}

const profileReducer = (state = initState, action) => {
    switch(action.type){
        case GET_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        default:
            return state;
    }
}

const getProfileAC = (profile) => ({type: GET_PROFILE, payload: profile})

const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        userAPI.getUser(id)
            .then((res) => {
                console.log(res.data);
                dispatch(getProfileAC(res.data));
            })
    }
}

export { profileReducer, getProfileAC, getProfileThunkCreator };