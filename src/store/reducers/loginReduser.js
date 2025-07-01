import { userAPI } from "../../api/api"

const LOGIN = 'LOGIN'
const LOG_OUT = 'LOG_OUT'

const initState = {
  userId: localStorage.getItem('userId') || null
}

const loginReduser = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        userId: null
      }
    default:
      return state
  }
}

const loginAC = (data) => ({ type: LOGIN, payload: data })
const logOutAC = (data) => ({ type: LOG_OUT, payload: data })

export const loginThunkCreator = (body) => {
  return (dispatch) => {
    userAPI.Login(body)
      .then((res) => {
        if (res.data.resultCode === 0) {
          const userId = res.data.data.userId;
          localStorage.setItem('userId', userId);
          dispatch(loginAC(userId));
          console.log(userId)
        } else {
          console.error(res.data.messages?.[0] || "Login failed");
        }
      });
  };
};

export const logOutThunkCreator = () => {
  return (dispatch) => {
    userAPI.LogOut()
      .then(() => {
        localStorage.removeItem('userId')
        localStorage.removeItem('profile')
        localStorage.removeItem('status')
        dispatch(logOutAC())
      })
  }
}

export default loginReduser