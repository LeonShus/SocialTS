import {v1} from "uuid";
import {UserPhotosType} from "./UsersReducer";
import {profileAPI} from "../../DAL/API";

const ADD_NEW_POST = "ADD-NEW-POST"
const SET_USER_TO_PROFILE_PAGE = "SET-USER-TO-PROFILE-PAGE"

export type PostDataType = {
    id: string | number
    message: string
    likeCount: number
}

type ContactsType = {
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

export type AddNewPostActionCreatorType = {
    type: typeof ADD_NEW_POST
    text: string
}
export const addNewPostAC = (text: string): AddNewPostActionCreatorType => ({type: ADD_NEW_POST, text: text})

export type SetUserToProfilePageACType = {
    type: typeof SET_USER_TO_PROFILE_PAGE
    user: UserType
}
export const setUserToProfilePageAC = (user: UserType): SetUserToProfilePageACType => ({
    type: SET_USER_TO_PROFILE_PAGE,
    user
})

//THUNK

export const setProfileT = (userId: number) => (dispatch: any) => {
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserToProfilePageAC(response))
        })
}