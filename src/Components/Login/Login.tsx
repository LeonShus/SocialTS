import {Form, Formik, useFormik} from "formik"
import React from "react"
import * as Yup from "yup"
import {Button, Paper, TextField} from "@mui/material";

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            pass: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address').required('Required'),
            pass: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
    return (

        <form onSubmit={formik.handleSubmit}>
            <Paper sx={{
                width: '200px',
                padding: "30px",
                display: "grid",
                rowGap: "20px"
            }}
            >
                <TextField
                    label={'Email'}
                    error={!!formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    variant={"outlined"}
                    size={"small"}
                    helperText={formik.touched.email && formik.errors.email && formik.errors.email}
                />
                <TextField
                    label={'Pass'}
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