import React from "react";
import classes from "./Profile.module.css"
import MyPosts, {PostDataType} from "./MyPosts/MyPosts";
import ProfileInfo from "./PrfileInfo/ProfileInfo";

export type ProfilePropsType = {
    postsData: Array<PostDataType>
}

const Profile = (props: ProfilePropsType) => {
    console.log(props, 'Profile')
    return (
        <main className={classes.container}>
            <ProfileInfo/>

            <MyPosts postsData={props.postsData}/>
        </main>
    )
}

export default Profile