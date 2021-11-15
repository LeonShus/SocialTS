

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

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
}

type UsersReducerInitType = typeof initState

export const usersReducer = (state: UsersReducerInitType = initState, action: any) => {

    const followOrNot = () => {
        return [...state.users.map(el => {
            if (el.id === action.id) {
                return {...el, follow: !el.followed}
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
            return {...state, users: [...state.users, ...action.users]}
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