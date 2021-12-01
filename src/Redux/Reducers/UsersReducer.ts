import {usersAPI} from "../../DAL/API";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_IS_FETCHING = "SET-IS-FETCHING"
const SET_FOLLOW_PROGRESS_START = "SET-FOLLOW-PROGRESS-START"
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

type UsersReducerActionType =
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


export type FollowACType = {
    type: typeof FOLLOW
    id: string | number
}
export const followAC = (id: string | number): FollowACType => ({type: FOLLOW, id})

export type UnFollowACType = {
    type: typeof UNFOLLOW
    id: string | number
}
export const unfollowAC = (id: string | number): UnFollowACType => ({type: UNFOLLOW, id})

export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})

export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})

export type SetIsFetchingACType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}
export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingACType => ({type: SET_IS_FETCHING, isFetching})

export type SetFollowProgressStartACType = {
    type: typeof SET_FOLLOW_PROGRESS_START
    id: number
}
export const setFollowProgressStartAC = (id: number): SetFollowProgressStartACType => ({
    type: SET_FOLLOW_PROGRESS_START,
    id
})

export type SetFollowProgressEndACType = {
    type: typeof SET_FOLLOW_PROGRESS_END
    id: number
}
export const setFollowProgressEndAC = (id: number): SetFollowProgressEndACType => ({type: SET_FOLLOW_PROGRESS_END, id})


//THUNK

export const setUsersT = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(setIsFetchingAC(true))

    usersAPI.getUsers(currentPage, pageSize)
        .then((response: any) => {
            dispatch(setUsersAC(response.items))
            dispatch(setTotalUsersCountAC(response.totalCount))
            dispatch(setIsFetchingAC(false))
        })
}

export const followUserT = (id: number) => (dispatch: any) => {
    dispatch(setFollowProgressStartAC(id))

    usersAPI.followToUser(id)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(setFollowProgressEndAC(id))
        })
}

export const unfollowUserT = (id: number) => (dispatch: any) => {
    dispatch(setFollowProgressStartAC(id))

    usersAPI.unfollowUser(id)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowAC(id))
            }
            dispatch(setFollowProgressEndAC(id))
        })
}