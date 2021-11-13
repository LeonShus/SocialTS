import {v1} from "uuid";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type UserType = {
    id: string | number
    name: string
    country: string
    avatar: string
    follow: boolean
}

let initState = {
    users: [
        {id: v1(), name: "Leon", country: "Moscow", avatar: "", follow: true},
        {id: v1(), name: "Alex", country: "Moscow", avatar: "", follow: false}
    ] as Array<UserType>,
}

type UsersReducerInitType = typeof initState

export const usersReducer = (state: UsersReducerInitType = initState, action: any) => {

    const followOrNot = () => {
        return state.users.map(el => el.id === action.id ? {...el, follow: !el.follow} : el)
    }

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: followOrNot() }
        case "UNFOLLOW":
            return {
                ...state,
                users: followOrNot() }
        case "SET-USERS":
            return { ... state, users: [ ...state.users, action.users]}
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