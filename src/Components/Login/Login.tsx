import {useFormik} from "formik"
import React from "react"
import * as Yup from "yup"
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {loginT} from "../../Redux/Reducers/AuthReducer";
import {AppStateType} from "../../Redux/ReduxStore";
import {Navigate} from "react-router-dom";

type LoginFormValues = {
    email: string
    pass: string
}

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.authUser.isAuth)
    let mainUserId = useSelector<AppStateType, number | null>(state => state.authUser.id)

    const loginError = useSelector<AppStateType, string | undefined>(state => state.authUser.loginServerError)

    const formik = useFormik({
        initialValues: {
            email: "",
            pass: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address").required("Required"),
            pass: Yup.string()
                .required("Required"),
        }),
        onSubmit: (values: LoginFormValues) => {
            dispatch(loginT(values.email, values.pass, false))
        }
    })
    //Перенаправляем,если пользователь залогинен
    if (isAuth) {
        return <Navigate to={`/profile/${mainUserId}`}/>
    }
    return (

        <form onSubmit={formik.handleSubmit}>
            <Paper sx={{
                width: "200px",
                padding: "30px",
                display: "grid",
                rowGap: "20px"
            }}
            >
                <TextField
                    label={"Email"}
                    error={!!formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    variant={"outlined"}
                    size={"small"}
                    helperText={formik.touched.email && formik.errors.email && formik.errors.email}
                />
                <TextField
                    label={"Pass"}
                    onChange={formik.handleChange}
                    name="pass"
                    variant={"outlined"}
                    size={"small"}
                    type={"password"}
                />
                <Button variant={"contained"}
                        type={"submit"}
                >
                    login
                </Button>
                {loginError && <div>{loginError}</div>}
            </Paper>
        </form>

    )
}