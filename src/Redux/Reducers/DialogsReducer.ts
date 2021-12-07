import { v1 } from "uuid"

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

type DialogsReducerActionType = SendNewMessageActionCreatorTYpe

export const dialogsReducer = (state: DialogsInitStateType = initState, action: DialogsReducerActionType) => {
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

type SendNewMessageActionCreatorTYpe = ReturnType<typeof sendNewMessageAC>
export const sendNewMessageAC = (text: string) => ({
    type: "ADD-NEW-MESSAGE",
    text
} as const)