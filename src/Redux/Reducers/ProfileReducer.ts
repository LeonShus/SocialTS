import {v1} from "uuid";
import {UserPhotosType} from "./UsersReducer";
import {profileAPI} from "../../DAL/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";

export type PostDataType = {
    id: string | number
    message: string
    likeCount: number
}

export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export type UserType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: UserPhotosType
}

let initState = {
    user: {} as UserType,
    status: "",
    postsData: [
        {id: v1(), message: "Hello, Boy", likeCount: 10},
        {id: v1(), message: "Boy", likeCount: 33}
    ] as Array<PostDataType>,
}

export type ProfileInitStateType = typeof initState

type ProfileReducerActionType = AddNewPostACT | SetUserToProfilePageACT | SetUserStatusACT

export const profileReducer = (state: ProfileInitStateType = initState, action: ProfileReducerActionType): ProfileInitStateType => {
    switch (action.type) {
        case "ADD-NEW-POST":
            let newPost: PostDataType = {
                id: v1(),
                message: action.text,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case "SET-USER-TO-PROFILE-PAGE":
            return {
                ...state,
                user: action.user
            }
        case "SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }
        default :
            return state
    }
}

export type AddNewPostACT = ReturnType<typeof addNewPostAC>
export const addNewPostAC = (text: string) => ({type: "ADD-NEW-POST", text: text} as const)

export type SetUserToProfilePageACT = ReturnType<typeof setUserToProfilePageAC>
export const setUserToProfilePageAC = (user: UserType) => ({
    type: "SET-USER-TO-PROFILE-PAGE",
    user
} as const)

export type SetUserStatusACT = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => ({type: "SET-USER-STATUS", status} as const)

//THUNK

export type ProfileReducerThunkType = ThunkAction<any, AppStateType, unknown, ProfileReducerActionType>

export const setProfileT = (userId: number): ProfileReducerThunkType => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserToProfilePageAC(response))
        })
}

export const setUserStatusT = (userId: number): ProfileReducerThunkType => (dispatch) => {
    return profileAPI.getUserStatus(userId)
        .then(response => {
            // console.log(response, "GET_STATUS")
            dispatch(setUserStatusAC(response.data))
        })
}

export const changeStatusT = (status: string): ProfileReducerThunkType => (dispatch) => {
    profileAPI.changeStatus(status)
        .then(response => {
            if (response.status === 200) {
                dispatch(setUserStatusAC(status))
            }
        })
}