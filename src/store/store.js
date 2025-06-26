import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducers/userReducer";
import { thunk } from "redux-thunk";
import { profileReducer } from "./reducers/profileReduser";


const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))