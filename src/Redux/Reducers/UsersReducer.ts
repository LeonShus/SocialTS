const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

type UserPhotosType = {
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
    isFetching: false
}

type UsersReducerInitType = typeof initState

export const usersReducer = (state: UsersReducerInitType = initState, action: any) => {

    const followOrNot = () => {
        return [...state.users.map(el => {
            if (el.id === action.id) {
                return {...el, followed: !el.followed}
            }
            return el
        })]
    }

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: followOrNot()
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: followOrNot()
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
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

export type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

export type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})