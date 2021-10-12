import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea rows={3}></textarea>
                <button>Send</button>
            </div>
            <Post message="Hello, Boy" likeCount={5}/>
            <Post message={"Hi!!!!"} likeCount={10}/>

        </div>
    )
}

export default MyPosts