import React, {memo} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {UsersType} from "../../Redux/Reducers/DialogsReducer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {WithAuthHOC} from "../../HOC/WithAuth";
import {MessagesWindow} from "./MessagesWindow/MessagesWindow";

export const Dialogs = memo(WithAuthHOC(() => {

    const users = useSelector<AppStateType, UsersType[]>(state => state.dialogsPage.users)

    const usersArr = users.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)


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
                    <MessagesWindow/>

                </Grid>
            </Paper>

        </Grid>

    )
}))