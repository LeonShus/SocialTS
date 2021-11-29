import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Reducers/ProfileReducer";
import {dialogsReducer} from "./Reducers/DialogsReducer";
import {usersReducer} from "./Reducers/UsersReducer";
import {authReducer} from "./Reducers/AuthReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authUser: authReducer
})

// type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store