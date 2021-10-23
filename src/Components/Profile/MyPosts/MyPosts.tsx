import React, {useState} from "react";
import Post from "./Post/Post";
import {addNewPost} from "../../../Redux/Reducers/ProfileReducer";


const MyPosts = (props: any) => {
    console.log(props, "MyPosts")


    let [newPostText, SetNewPostText] = useState<string>("")

    const changePostArea = (e: string) => {
        SetNewPostText(e)
    }

    const addPost = () => {
        props.dispatch(addNewPost(newPostText))
    }

    //With Local State
    // let [postsState, SetPostsState] = useState<Array<PostDataType>>(props.postsData)
    // const addPost = () => {
    //     let newPost : PostDataType = {
    //         id: 5,
    //         message: newPostText,
    //         likeCount: 0
    //     }
    //     SetPostsState([...postsState, newPost])
    //     // props.addNewPost(newPostText)
    // }

    return (
        <div>
            <div>
                <textarea rows={3} onChange={(e) => changePostArea(e.target.value)} value={newPostText}></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            {props.postsData.map((el: any) => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)}


        </div>
    )
}

export default MyPosts