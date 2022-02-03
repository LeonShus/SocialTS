import {v1} from "uuid";
import {UserPhotosType} from "./UsersReducer";
import {profileAPI} from "../../DAL/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {isFetchingAC} from "./AppReducer";
import {Dispatch} from "redux";

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
        {id: v1(), message: "Boy", likeCount: 33},
        {id: v1(), message: "Sup", likeCount: 21},
    ] as Array<PostDataType>,
}

export type ProfileInitStateType = typeof initState

type ProfileReducerActionType = AddNewPostACT | SetUserToProfilePageACT | SetUserStatusACT | SetAvatarPhotoAT

export const profileReducer = (state: ProfileInitStateType = initState, action: ProfileReducerActionType): ProfileInitStateType => {
    switch (action.type) {
        case "PROFILE/ADD-NEW-POST":
            let newPost: PostDataType = {
                id: v1(),
                message: action.text,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case "PROFILE/SET-USER-TO-PROFILE-PAGE":
            return {
                ...state,
                user: action.user
            }
        case "PROFILE/SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "PROFILE/SET-AVATAR-PHOTO":
            return {
                ...state,
                user: {
                    ...state.user,
                    photos: action.photos
                }
            }
        default :
            return state
    }
}

export type AddNewPostACT = ReturnType<typeof addNewPostAC>
export const addNewPostAC = (text: string) => ({type: "PROFILE/ADD-NEW-POST", text} as const)

export type SetUserToProfilePageACT = ReturnType<typeof setUserToProfilePageAC>
export const setUserToProfilePageAC = (user: UserType) => ({
    type: "PROFILE/SET-USER-TO-PROFILE-PAGE",
    user
} as const)

export type SetUserStatusACT = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => ({type: "PROFILE/SET-USER-STATUS", status} as const)

export type SetAvatarPhotoAT = ReturnType<typeof setAvatarPhotoAC>
export const setAvatarPhotoAC = (photos: UserPhotosType) => ({type: "PROFILE/SET-AVATAR-PHOTO", photos} as const)

//THUNK

export type ProfileReducerThunkType = ThunkAction<any, AppStateType, unknown, ProfileReducerActionType>

export const setProfileT = (userId: number): ProfileReducerThunkType => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserToProfilePageAC(response))
            dispatch(isFetchingAC(false))
        })
}

export const setUserStatusT = (userId: number): ProfileReducerThunkType => (dispatch: Dispatch) => {
    return profileAPI.getUserStatus(userId)
        .then(response => {
            if (response.status === 200) {
                dispatch(setUserStatusAC(response.data))
            }
        })
}

export const changeStatusT = (status: string): ProfileReducerThunkType => (dispatch: Dispatch) => {
    profileAPI.changeStatus(status)
        .then(response => {
            if (response.status === 200) {
                dispatch(setUserStatusAC(status))
            }
        })
}

export const photosChangeT = (photo: any) => (dispatch: Dispatch) => {
    profileAPI.uploadPhoto(photo)
        .then(res => {
            dispatch(setAvatarPhotoAC(res.data.data.photos))
        })
}