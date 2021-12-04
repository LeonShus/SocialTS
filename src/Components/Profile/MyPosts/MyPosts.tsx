import React, {ChangeEvent, useState} from "react";
import {Post} from "./Post/Post";
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {addNewPostAC} from "../../../Redux/Reducers/ProfileReducer";


export const MyPosts = () => {
    const dispatch = useDispatch()
    const postsData = useSelector((state: AppStateType) => state.profilePage.postsData)

    const [newPostText, SetNewPostText] = useState<string>("")

    const changePostArea = (e: string) => {
        SetNewPostText(e)
    }

    const addPost = () => {
        if (newPostText.trim()) {   //Перед добавлением проверяем на пустую строку
            dispatch(addNewPostAC(newPostText.trim()))
            SetNewPostText("")
        }
    }


    const changeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changePostArea(e.currentTarget.value)
    }
    let posts = postsData.map((el) => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)

    return (
        <Grid container>
            <Grid item>
                <TextField multiline
                           rows={4}
                           onChange={changeArea}
                           value={newPostText}
                />

                <Button onClick={addPost} size={"small"} variant="contained">Send</Button>
            </Grid>

            <Grid container>
                <Grid item>
                    {posts}
                </Grid>
            </Grid>


        </Grid>
    )
}

export default MyPosts