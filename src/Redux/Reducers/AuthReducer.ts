import {authAPI, ResultCodeEnum} from "../../DAL/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {isInitialisedAC} from "./AppReducer";

export type AuthStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    loginServerError?: string
}

const initState: AuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    loginServerError: ""
}

type AuthReducerActionType = SetAuthACType | SetLoginServerErrorAT | SetIsAuthAT

export const authReducer = (state: AuthStateType = initState, action: AuthReducerActionType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH":
            return {
                ...state,
                email: action.email,
                login: action.login,
                id: action.id
            }
        case "SET-LOGIN-SERVER-ERROR":
            return {
                ...state,
                loginServerError: action.error
            }
        case "SET-IS-AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}


export type SetAuthACType = ReturnType<typeof setAuthAC>
export const setAuthAC = (email: string | null, id: number | null, login: string | null) => ({
    type: "SET-AUTH",
    email,
    id,
    login
} as const)

export type SetIsAuthAT = ReturnType<typeof setIsAuthAC>
export const setIsAuthAC = (isAuth: boolean) => ({type: "SET-IS-AUTH", isAuth} as const)

export type SetLoginServerErrorAT = ReturnType<typeof setLoginServerErrorAC>
export const setLoginServerErrorAC = (error: string) => ({type: "SET-LOGIN-SERVER-ERROR", error} as const)


///THUNK

export type AuthReducerThunkType = ThunkAction<any, AppStateType, unknown, AuthReducerActionType>

export const getAuthUserT = (): AuthReducerThunkType => (dispatch: any) => {
    authAPI.getAuthMe()
        .then(response => {
            console.log(response)
            if (response.resultCode === ResultCodeEnum.Success) {
                const {email, id, login} = response.data
                dispatch(setAuthAC(email, id, login))
                dispatch(setIsAuthAC(true))
            }
        })
        .finally(() => {
            dispatch(isInitialisedAC(true))
        })
}

export const loginT = (email: string, password: string, rememberMe: boolean = false): AuthReducerThunkType =>
    (dispatch) => {
        authAPI.login(email, password, false)
            .then(response => {
                if (response.resultCode === ResultCodeEnum.Success) {
                    dispatch(getAuthUserT())
                    dispatch(setLoginServerErrorAC(""))
                } else {
                    dispatch(setLoginServerErrorAC(response.messages))
                }
            })
    }

export const logOutT = (): AuthReducerThunkType => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            dispatch(setAuthAC(null, null, null))
            dispatch(setIsAuthAC(false))
        })
}