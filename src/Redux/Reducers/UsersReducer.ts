import {ResultCodeEnum, usersAPI} from "../../DAL/API";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";


const SET_FOLLOW_PROGRESS_END = "SET-FOLLOW-PROGRESS-END"

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
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetTotalUsersCountACType
    | SetCurrentPageACType
    | SetIsFetchingACType
    | SetFollowProgressStartACType
    | SetFollowProgressEndACType

export const usersReducer = (state: UsersReducerInitType = initState, action: UsersReducerActionType): UsersReducerInitType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    return el.id === action.id ? {...el, followed: true} : el
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    return el.id === action.id ? {...el, followed: false} : el
                })
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOW-PROGRESS-START":
            return {
                ...state,
                followInProgress: [...state.followInProgress, action.id]
            }
        case "SET-FOLLOW-PROGRESS-END":
            return {
                ...state,
                followInProgress: state.followInProgress.filter(el => el !== action.id)
            }
        default :
            return state
    }
}


export type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: string | number) => ({type: "FOLLOW", id} as const)

export type UnFollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: string | number) => ({type: "UNFOLLOW", id} as const)

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)

export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number)=> ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
} as const)

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)

export type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching: boolean) => ({type: "SET-IS-FETCHING", isFetching} as const)

export type SetFollowProgressStartACType = ReturnType<typeof setFollowProgressStartAC>
export const setFollowProgressStartAC = (id: number) => ({
    type: "SET-FOLLOW-PROGRESS-START",
    id
} as const)

export type SetFollowProgressEndACType = ReturnType<typeof setFollowProgressEndAC>
export const setFollowProgressEndAC = (id: number)=> ({type: SET_FOLLOW_PROGRESS_END, id} as const)


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
