import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Reducers/ProfileReducer";

let reducers = combineReducers({
    profilePage: profileReducer
})

let store = createStore(reducers)

// @ts-ignore
window.store = store

export default store