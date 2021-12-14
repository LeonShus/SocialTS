import {authAPI, ResultCodeEnum} from "../../DAL/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import * as console from "console";

export type AuthStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth?: boolean
}

const initState: AuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

type AuthReducerActionType = SetAuthACType

export const authReducer = (state: AuthStateType = initState, action: AuthReducerActionType) : AuthStateType => {
    switch (action.type) {
        case "SET-AUTH":
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export type SetAuthACType = ReturnType<typeof setAuthAC>
export const setAuthAC = (data: AuthStateType) => ({type: "SET-AUTH", data} as const)



///THUNK

export type AuthReducerThunkType = ThunkAction<any, AppStateType, unknown, AuthReducerActionType>

export const getAuthUserT = (): AuthReducerThunkType => (dispatch) => {
    authAPI.getAuthMe()
        .then(response => {
            if (response.resultCode === ResultCodeEnum.Success) {
                const {email, id, login} = response.data
                dispatch(setAuthAC({email, id, login, isAuth: true}))
            }
        })
}

export const loginT = (email: string, password: string, rememberMe: boolean = false): AuthReducerThunkType => (dispatch) => {
    authAPI.login(email, password, false)
        .then(response => {
            if(response.resultCode === ResultCodeEnum.Success){
                dispatch(getAuthUserT())
            }
        })
}

export const logOutT = (): AuthReducerThunkType => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            dispatch(setAuthAC({email:null, id:null, login:null, isAuth: false}))
        })
}