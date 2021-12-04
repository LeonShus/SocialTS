import React, {ChangeEvent, useState} from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendNewMessageAC} from "../../Redux/Reducers/DialogsReducer";
import Button from "@mui/material/Button";
import {Grid, Paper, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";

export const Dialogs = () => {

    const users = useSelector((state: AppStateType) => state.dialogsPage.users)
    const messages = useSelector((state: AppStateType) => state.dialogsPage.messages)
    const dispatch = useDispatch()

    const usersArr = users.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    const messageArr = messages.map((el) => <Message key={el.id} message={el.message}/>)

    const [newMessage, SetNewMessage] = useState("")

    const messageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        SetNewMessage(e.currentTarget.value)
    }
    const send = () => {
        dispatch(sendNewMessageAC(newMessage))
    }

    return (

        <Grid container>
            {/*Users Container*/}
            <Grid
                item
                sx={{margin: "8px 20px 0 10px"}}
            >
                {usersArr}
            </Grid>

            {/*Dialog Window*/}
            <Paper elevation={3}>
                <Grid item
                      sx={{
                          width: "500px",
                          padding: "20px"
                      }}
                >
                    {/*Messages window*/}
                    <Grid container
                          sx={{
                              padding: "20px",
                              border: "2px solid gray",
                              borderRadius: "5px",
                              mb: "10px"
                          }}>
                        {messageArr}
                    </Grid>
                    {/*Send item*/}
                    <Grid item>
                        <TextField
                            multiline
                            onChange={messageChange}
                            rows={4}
                            value={newMessage}
                        />

                        <Button onClick={send}
                                size={"small"}
                                variant="contained"
                        >Send</Button>
                    </Grid>

                </Grid>
            </Paper>

        </Grid>

    )
}

export default Dialogs