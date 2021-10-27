import React, {useState} from "react";
import {addNewPost} from "../../../Redux/Reducers/ProfileReducer";
import {ProfilePropsType} from "../Profile";
import MyPosts from "./MyPosts";


const MyPostsContainer: React.FC<ProfilePropsType> = (props) => {
    console.log(props, "MyPosts")


    let [newPostText, SetNewPostText] = useState<string>("")

    const changePostArea = (e: string) => {
        SetNewPostText(e)
    }

    const addPost = () => {
        if(newPostText.trim()){   //Перед добавлением проверяем на пустую строку
            props.dispatch(addNewPost(newPostText.trim()))
            SetNewPostText("")
        }
    }

    return (
        <MyPosts changePostArea={changePostArea}
                 addPost={addPost}
                 newPostText={newPostText}
                 postsData={props.postsData}/>
    )
}

export default MyPostsContainer