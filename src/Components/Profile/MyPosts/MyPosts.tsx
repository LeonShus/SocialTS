import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {PostDataType} from "../../../Redux/Reducers/ProfileReducer";

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
        <div>
            <div>
                <textarea rows={3} onChange={changeArea} value={newPostText}></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            {posts}


        </div>
    )
}

export default MyPosts