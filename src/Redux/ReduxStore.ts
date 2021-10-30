import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Reducers/ProfileReducer";
import {dialogsReducer} from "./Reducers/DialogsReducer";
import {usersReducer} from "./Reducers/UsersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store