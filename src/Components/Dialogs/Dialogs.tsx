import React, {ChangeEvent, useState} from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessageType, UsersType} from "../../Redux/Reducers/DialogsReducer";
import Button from "@mui/material/Button";
import {Grid, Paper} from "@mui/material";
import { makeStyles } from '@mui/styles';


export type DialogsPropsType = {
    messages: Array<MessageType>
    users: Array<UsersType>
    sendMessage: (text: string) => void
}

const Styles= makeStyles({
    dialogsUsersContainer: {
        margin: "8px 20px 0 10px",
    }
})


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


    const style = Styles()
    return (

        <Grid container>
            {/*Users Container*/}
            <Grid
                item
                className={style.dialogsUsersContainer}
            >
                {usersArr}
            </Grid>

            {/*Dialog Window*/}
            <Paper elevation={3}>
                <Grid item sx={{width: "500px",}}>
                    {/*Messages window*/}
                    <Grid container sx={{ padding: '20px' }}>
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
            </Paper>

        </Grid>

    )
}

export default Dialogs