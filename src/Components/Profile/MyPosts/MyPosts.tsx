import React from "react";
import Post from "./Post/Post";

type PostDataType = {
    id: number
    message: string
    likeCount: number
}

let postData: Array<PostDataType> = [
    { id: 1, message: 'Hello, Boy', likeCount: 10},
    { id: 2, message: 'Boy', likeCount: 33}
]

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea rows={3}></textarea>
                <button>Send</button>
            </div>
            <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
            <Post message={postData[1].message} likeCount={postData[1].likeCount}/>

        </div>
    )
}

export default MyPosts