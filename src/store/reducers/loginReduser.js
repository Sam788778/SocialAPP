import { userAPI } from "../../api/api"

const LOGIN = 'LOGIN'
const LOG_OUT = 'LOG_OUT'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

const initState = {
  userId: null,
  captchaURL: null
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
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.payload
      }
    default:
      return state
  }
}

const loginAC = (data) => ({ type: LOGIN, payload: data })
const logOutAC = (data) => ({ type: LOG_OUT, payload: data })
const captchaAC = (data) => ({ type: SET_CAPTCHA_URL, payload: data })


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
          if (res.data.resultCode === 10) {
            userAPI.Captcha().then((captchaRes) => {
              const captchaUrl = captchaRes.data.url;
              console.log(captchaUrl)
              dispatch(captchaAC(captchaUrl));
            });
          }
        }
      });
  };
};

export const logOutThunkCreator = () => {
  return (dispatch) => {
    userAPI.LogOut()
      .then(() => {
        localStorage.removeItem('userId')
        dispatch(logOutAC())
      })
  }
}

export default loginReduser