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
    postsData: [
        {id: v1(), message: "Hello, Boy", likeCount: 10},
        {id: v1(), message: "Boy", likeCount: 33}
    ] as Array<PostDataType>,
}

export type ProfileInitStateType = typeof initState

type ProfileReducerActionType = AddNewPostActionCreatorType | SetUserToProfilePageACType

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
        default :
            return state
    }
}

export type AddNewPostActionCreatorType = ReturnType<typeof addNewPostAC>
export const addNewPostAC = (text: string) => ({type: "ADD-NEW-POST", text: text} as const)

export type SetUserToProfilePageACType = ReturnType<typeof setUserToProfilePageAC>
export const setUserToProfilePageAC = (user: UserType) => ({
    type: "SET-USER-TO-PROFILE-PAGE",
    user
} as const)

// export const setUserAboutMe = (status: string) => ({ type:  })

//THUNK

export type ProfileReducerThunkType = ThunkAction<any, AppStateType, unknown, ProfileReducerActionType>

export const setProfileT = (userId: number): ProfileReducerThunkType => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserToProfilePageAC(response))
        })
}

export const changeAboutMeT = (status: string): ProfileReducerThunkType  => (dispatch) => {
    profileAPI.changeAboutMe(status)
        .then(response => {
            console.log(response)
        })
}