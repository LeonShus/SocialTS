import React from "react"
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Message from "../Message/Message";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {MessageType} from "../../../Redux/Reducers/DialogsReducer";
import {useFormik} from "formik";
import * as Yup from "yup";

type MessagesWindowPropsType = {
    send: (newMessage: string) => void
}

export const MessagesWindow = ({ send }:MessagesWindowPropsType) => {

    const messages = useSelector<AppStateType, MessageType[]>(state => state.dialogsPage.messages)

    const messageArr = messages.map((el) => <Message key={el.id} message={el.message}/>)

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
        <>
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
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        multiline
                        name={"message"}
                        error={!!formik.errors.message}
                        helperText={!!formik.errors.message && formik.errors.message}
                        onChange={formik.handleChange}
                        rows={4}
                        value={formik.values.message}

                    />
                    <Button type={"submit"}
                            size={"small"}
                            variant="contained"
                    >
                        Send
                    </Button>
                </form>
            </Grid>
        </>
    )
}