import React, {memo} from "react";
import {Post} from "./Post/Post";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {addNewPostAC, PostDataType} from "../../../Redux/Reducers/ProfileReducer";
import {useFormik} from "formik";
import * as Yup from "yup";


export const MyPosts = memo(() => {
    const dispatch = useDispatch()
    const postsData = useSelector<AppStateType, PostDataType[]>(state => state.profilePage.postsData)

    const addPost = (post: string) => {
        if (post.trim()) {   //Перед добавлением проверяем на пустую строку
            dispatch(addNewPostAC(post.trim()))
        }
    }

    const formik = useFormik({
        initialValues: {
            newPost: "",
        },
        validationSchema: Yup.object({
            newPost: Yup.string()
                .max(5, "Max chars 5")
        }),
        onSubmit: values => {
            addPost(values.newPost)
        }
    })

    let posts = postsData.map((el) => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)

    return (
        <Grid container>
            <Grid item>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        name={"newPost"}
                        error={!!formik.errors.newPost}
                        helperText={!!formik.errors.newPost && formik.errors.newPost}
                        multiline
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.newPost}
                    />
                    <Button type={"submit"} variant="contained">Send</Button>
                </form>
            </Grid>

            <Grid container>
                <Grid item>
                    {posts}
                </Grid>
            </Grid>


        </Grid>
    )
})