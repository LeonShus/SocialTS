import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../Redux/Reducers/ProfileReducer";
import {Button, Grid, TextField} from "@mui/material";

type MyPostsType = {
    changePostArea: (e: string) => void
    addPost: () => void
    newPostText: string
    postsData: Array<PostDataType>
}

const MyPosts = ({addPost, changePostArea, newPostText, postsData}: MyPostsType) => {
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