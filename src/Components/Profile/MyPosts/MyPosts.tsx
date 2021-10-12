import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea rows={5}></textarea>
                <button>Send</button>
            </div>
            <Post/>
            <Post/>

        </div>
    )
}

export default MyPosts