import React from "react";
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile";

export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

const MyPosts = (props: ProfilePropsType) => {
    console.log(props,'MyPosts')
    return (
        <div>
            <div>
                <textarea rows={3}></textarea>
                <button>Send</button>
            </div>
            { props.postsData.map(el => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>) }


        </div>
    )
}

export default MyPosts