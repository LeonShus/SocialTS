import { v1 } from "uuid"



const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

export type MessageType = {
    id: string | number
    message: string
}
export type UsersType = {
    id: string | number
    name: string
}

const initState = {
    messages: [
        {id: v1(), message: "Hi, bro!"},
        {id: v1(), message: "GL!"},
        {id: v1(), message: "Bye;)"},
    ] as Array<MessageType>,

    users: [
        {id: v1(), name: "Leon"},
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Bob"}
    ] as Array<UsersType>,
}

export type DialogsInitStateType = typeof initState

export const dialogsReducer = (state: DialogsInitStateType = initState, action: any) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMes: MessageType = {
                id: v1(),
                message: action.text
            }
            return {
                ...state,
                messages: [...state.messages, newMes]
            }
        default:
            return state
    }
}

type SendNewMessageActionCreatorTYpe = {
    type: typeof ADD_NEW_MESSAGE
    text: string
}
export const sendNewMessageActionCreator = (text: string): SendNewMessageActionCreatorTYpe => ({
    type: ADD_NEW_MESSAGE,
    text
})