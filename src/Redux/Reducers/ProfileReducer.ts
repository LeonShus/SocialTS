import {v1} from "uuid";

const ADD_NEW_POST = "ADD-NEW-POST"

export type PostDataType = {
    id: string | number
    message: string
    likeCount: number
}

let initState = {
    postsData: [
        {id: v1(), message: "Hello, Boy", likeCount: 10},
        {id: v1(), message: "Boy", likeCount: 33}
    ] as Array<PostDataType>,
}

export type ProfileInitStateType = typeof initState

export const profileReducer = (state: ProfileInitStateType = initState, action: any): ProfileInitStateType => {
    switch (action.type) {
        case "ADD-NEW-POST":
            let newPost: PostDataType = {
                id: v1(),
                message: action.text,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [ ...state.postsData, newPost ]
            }
        default :
            return state
    }
}

type AddNewPostActionCreatorType = {
    type: typeof ADD_NEW_POST
    text: string
}
export const addNewPost = (text: string): AddNewPostActionCreatorType => ({type: ADD_NEW_POST, text: text})