import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessageType, sendNewMessageAC, UsersType} from "../../Redux/Reducers/DialogsReducer";
import Button from "@mui/material/Button";
import {Grid, Paper, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {WithAuthHOC} from "../../HOC/WithAuth";
import {useFormik} from "formik";
import * as Yup from "yup";
import {MessagesWindow} from "./MessagesWindow/MessagesWindow";

export const Dialogs = WithAuthHOC(() => {

    const users = useSelector<AppStateType, UsersType[]>(state => state.dialogsPage.users)

    const dispatch = useDispatch()

    const usersArr = users.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)


    const send = (newMessage: string) => {
        dispatch(sendNewMessageAC(newMessage))
    }
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        validationSchema: Yup.object({
            message: Yup.string()
                .max(10, "Max chars 10")

        }),
        onSubmit: values => {
            send(values.message)
        }
    })


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