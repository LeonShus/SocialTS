import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {ProfilePostsType} from "../../Redux/MyState";



const Profile = (props: ProfilePostsType) => {
    console.log(props, 'Profile')
    return (
        <main className={classes.container}>
            <ProfileInfo/>

            <MyPosts postsData={props.postsData}/>
        </main>
    )
}

export default Profile