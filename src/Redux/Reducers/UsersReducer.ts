import {ResultCodeEnum, usersAPI} from "../../DAL/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";


export type UserPhotosType = {
    large: null | string
    small: null | string
}

export type UserType = {
    followed: boolean | null
    id: number
    name: string | null
    photos: UserPhotosType
    status: string | null
    uniqueUrlName: string | null
}

let initState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number>
}

type UsersReducerInitType = typeof initState

export type UsersReducerActionType =
    FollowACT
    | UnFollowACT
    | SetUsersACT
    | SetTotalUsersCountACT
    | SetCurrentPageACT
    | SetIsFetchingACT
    | SetFollowProgressStartACT
    | SetFollowProgressEndACT

export const usersReducer = (state: UsersReducerInitType = initState, action: UsersReducerActionType): UsersReducerInitType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    return el.id === action.id ? {...el, followed: true} : el
                })
            }
        case "USERS/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    return el.id === action.id ? {...el, followed: false} : el
                })
            }
        case "USERS/SET-USERS":
            return {...state, users: action.users}
        case "USERS/SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "USERS/SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "USERS/SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "USERS/SET-FOLLOW-PROGRESS-START":
            return {
                ...state,
                followInProgress: [...state.followInProgress, action.id]
            }
        case "USERS/SET-FOLLOW-PROGRESS-END":
            return {
                ...state,
                followInProgress: state.followInProgress.filter(el => el !== action.id)
            }
        default :
            return state
    }
}


export type FollowACT = ReturnType<typeof followAC>
export const followAC = (id: string | number) => ({type: "USERS/FOLLOW", id} as const)

export type UnFollowACT = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: string | number) => ({type: "USERS/UNFOLLOW", id} as const)

export type SetUsersACT = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => ({type: "USERS/SET-USERS", users} as const)

export type SetTotalUsersCountACT = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: "USERS/SET-TOTAL-USERS-COUNT",
    totalUsersCount
} as const)

export type SetCurrentPageACT = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => ({type: "USERS/SET-CURRENT-PAGE", currentPage} as const)

export type SetIsFetchingACT = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching: boolean) => ({type: "USERS/SET-IS-FETCHING", isFetching} as const)

export type SetFollowProgressStartACT = ReturnType<typeof setFollowProgressStartAC>
export const setFollowProgressStartAC = (id: number) => ({
    type: "USERS/SET-FOLLOW-PROGRESS-START",
    id
} as const)

export type SetFollowProgressEndACT = ReturnType<typeof setFollowProgressEndAC>
export const setFollowProgressEndAC = (id: number) => ({type: "USERS/SET-FOLLOW-PROGRESS-END", id} as const)


//THUNK

export type UserReducerThunkType = ThunkAction<any, AppStateType, unknown, UsersReducerActionType>

export const setUsersT = (currentPage: number, pageSize: number): UserReducerThunkType =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then((response: any) => {
                dispatch(setUsersAC(response.items))
                dispatch(setTotalUsersCountAC(response.totalCount))
                dispatch(setIsFetchingAC(false))
            })
    }

export const followUserT = (id: number): UserReducerThunkType =>
    (dispatch) => {
        dispatch(setFollowProgressStartAC(id))

        usersAPI.followToUser(id)
            .then(response => {
                if (response.resultCode === ResultCodeEnum.Success) {
                    dispatch(followAC(id))
                }
                dispatch(setFollowProgressEndAC(id))
            })
    }

export const unfollowUserT = (id: number): UserReducerThunkType =>
    (dispatch) => {
        dispatch(setFollowProgressStartAC(id))

        usersAPI.unfollowUser(id)
            .then(response => {
                if (response.resultCode === ResultCodeEnum.Success) {
                    dispatch(unfollowAC(id))
                }
                dispatch(setFollowProgressEndAC(id))
            })
    }
