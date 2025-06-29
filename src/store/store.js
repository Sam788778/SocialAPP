import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducers/userReducer";
import { thunk } from "redux-thunk";
import { profileReducer } from "./reducers/profileReduser";
import loginReduser from "./reducers/loginReduser";


const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    login: loginReduser,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))