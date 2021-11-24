import React, {ChangeEvent, useState} from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessageType, UsersType} from "../../Redux/Reducers/DialogsReducer";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";


export type DialogsPropsType = {
    messages: Array<MessageType>
    users: Array<UsersType>
    sendMessage: (text: string) => void
}

const Dialogs = ({messages, users, sendMessage}: DialogsPropsType) => {

    let usersArr = users.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageArr = messages.map((el) => <Message key={el.id} message={el.message}/>)

    let [newMessage, SetNewMessage] = useState("")

    const messageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        SetNewMessage(e.currentTarget.value)
    }
    const send = () => {
        sendMessage(newMessage)
    }

    return (

        <Grid container>
            {/*Users Bar*/}
            <Grid item>
                {usersArr}
            </Grid>

            {/*Dialog Window*/}
            <Grid container sx={{width: "500px"}}>
                {/*Messages window*/}
                <Grid container>
                    {messageArr}
                </Grid>
                {/*Send item*/}
                <Grid item>
                    <textarea onChange={messageChange}
                              rows={3}
                              value={newMessage}
                    />

                    <Button onClick={send} size={"small"} variant="contained">Send</Button>
                </Grid>

            </Grid>
        </Grid>

    )
}

export default Dialogs