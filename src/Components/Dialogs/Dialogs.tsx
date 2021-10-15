import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

type UsersType = {
    name: string
    id: number
}

let users: Array<UsersType> = [
    {id: 1, name: "Leon"},
    {id: 2, name: "Alex"}
]

type MessagesType = {
    id: number
    message: string
}

let messages: Array<MessagesType> = [
    { id: 1, message: "Im your father" },
    { id: 2, message: "Hello Boy!" },
    { id: 2, message: "It's a joke;3" }
]

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <DialogItem name={users[0].name} id={users[0].id}/>
                <DialogItem name={users[1].name} id={users[1].id}/>

            </div>
            <div className={classes.window}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
            </div>
        </div>

    )
}

export default Dialogs