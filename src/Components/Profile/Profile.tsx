import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {PostDataType} from "../../Redux/MyState";

export type ProfilePropsType = {
    postsData: Array<PostDataType>
    addNewPost: (post: string) => void
}

const Profile = (props: ProfilePropsType) => {
    console.log(props, 'Profile')
    return (
        <main className={classes.container}>
            <ProfileInfo/>

            <MyPosts postsData={props.postsData} addNewPost={props.addNewPost}/>
        </main>
    )
}

export default Profile