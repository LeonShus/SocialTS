import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {DispatchType, PostDataType} from "../../Redux/MyState";

export type ProfilePropsType = {
    postsData: Array<PostDataType>
    dispatch: (action: DispatchType) => void
}

const Profile = (props: ProfilePropsType) => {
    console.log(props, 'Profile')
    return (
        <main className={classes.container}>
            <ProfileInfo/>

            <MyPosts postsData={props.postsData} dispatch={props.dispatch}/>
        </main>
    )
}

export default Profile