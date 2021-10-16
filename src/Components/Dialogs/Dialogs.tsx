import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

export type UsersType = {
    name: string
    id: number
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogPropsType = {
    users: Array<UsersType>
    messages: Array<MessagesType>
}



const Dialogs = (props: DialogPropsType) => {
    console.log(props,'Dialogs')
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                { props.users.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>) }
            </div>
            <div className={classes.window}>
                { props.messages.map(el => <Message key={el.id} message={el.message}/>) }
            </div>
        </div>

    )
}

export default Dialogs