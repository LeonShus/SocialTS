import React, {useState} from "react";
import {connect} from "react-redux";
import {addNewPostAC, AddNewPostActionCreatorType, PostDataType} from "../../../Redux/Reducers/ProfileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redux/ReduxStore";

type MapStateToPropsType = {
    postsData: Array<PostDataType>
}

type MapDispatchToPropsType = {
    addNewPostAC: (text: string) => AddNewPostActionCreatorType
}

type MyPostsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let [newPostText, SetNewPostText] = useState<string>("")

    const changePostArea = (e: string) => {
        SetNewPostText(e)
    }

    const addPost = () => {
        if (newPostText.trim()) {   //Перед добавлением проверяем на пустую строку
            props.addNewPostAC(newPostText.trim())
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

export default connect<MapStateToPropsType,
    MapDispatchToPropsType, {},
    AppStateType>(mapStateToProps, {addNewPostAC})(MyPostsContainer)