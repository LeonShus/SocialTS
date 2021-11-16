import React, {useState} from "react";
import { connect } from "react-redux";
import {addNewPostAC} from "../../../Redux/Reducers/ProfileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redux/ReduxStore";


const MyPostsContainer = (props: any) => {

    let [newPostText, SetNewPostText] = useState<string>("")

    const changePostArea = (e: string) => {
        SetNewPostText(e)
    }

    const addPost = () => {
        if(newPostText.trim()){   //Перед добавлением проверяем на пустую строку
            props.addNewPost(newPostText.trim())
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

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData
    }
}

export default connect(mapStateToProps, {addNewPost: addNewPostAC})(MyPostsContainer)