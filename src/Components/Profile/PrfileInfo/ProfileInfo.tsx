import classes from "./ProfileInfo.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import React from "react";
import {UserType} from "../../../Redux/Reducers/ProfileReducer";

type ProfileInfoPropsType = {
    user: UserType
}

const ProfileInfo = ({user}: ProfileInfoPropsType) => {

    const getUserPhoto = () => {
        return user.photos && user.photos.small ? user.photos.small : userDef
    }

    return (
        <main className={classes.container}>
            <div>
                <img className={classes.avatar} src={getUserPhoto()} alt="avatar"/>
            </div>
            <div>
                {user.fullName}
            </div>
            <div>
                {user.aboutMe}
            </div>

        </main>
    )
}

export default ProfileInfo