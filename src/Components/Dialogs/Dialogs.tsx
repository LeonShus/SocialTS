import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import {sendNewMessageAC, UsersType} from "../../Redux/Reducers/DialogsReducer";
import {Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {WithAuthHOC} from "../../HOC/WithAuth";
import {MessagesWindow} from "./MessagesWindow/MessagesWindow";

export const Dialogs = WithAuthHOC(() => {

    const users = useSelector<AppStateType, UsersType[]>(state => state.dialogsPage.users)

    const dispatch = useDispatch()

    const usersArr = users.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)


    const send = (newMessage: string) => {
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
                    <MessagesWindow send={send}/>

                </Grid>
            </Paper>

        </Grid>

    )
})