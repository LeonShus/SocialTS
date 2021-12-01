import {authAPI} from "../../DAL/API";

const SET_AUTH = "SET-AUTH"

export type AuthStateType = {
    id: null | number
    email: null | string
    login: null | string
}

const initState: AuthStateType = {
    email: null,
    id: null,
    login: null
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


export type SetAuthACType = {
    type: typeof SET_AUTH
    data: AuthStateType
}
export const setAuthAC = (data: AuthStateType): SetAuthACType => ({type: SET_AUTH, data})



///THUNK

export const getAuthUserT = () => (dispatch: any) => {
    authAPI.getAuthMe()
        .then(response => {
            if (response.resultCode === 0) {
                console.log(response)
                const {email, id, login} = response.data
                dispatch(setAuthAC({email, id, login}))
            }
        })
}