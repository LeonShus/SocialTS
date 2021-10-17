import React from "react";
import Post from "./Post/Post";
import {ProfilePostsType} from "../../../Redux/MyState";



const MyPosts = (props: ProfilePostsType) => {
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