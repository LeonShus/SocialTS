import {useFormik} from "formik"
import React from "react"
import * as Yup from "yup"
import {Button, Paper, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {loginT} from "../../Redux/Reducers/AuthReducer";
import {AppStateType} from "../../Redux/ReduxStore";
import {Redirect} from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.authUser.isAuth)

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
        onSubmit: values => {
            dispatch(loginT(values.email, values.pass, false))
        }
    })
    //Перенаправляем,если пользователь залогинен
    if(isAuth){
        return <Redirect to={'/profile'}/>
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
            </Paper>
        </form>

    )
}