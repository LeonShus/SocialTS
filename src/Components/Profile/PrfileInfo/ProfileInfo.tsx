import classes from "./ProfileInfo.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";

import React from "react";

const ProfileInfo = () => {
    return (
        <main className={classes.container}>
            <div>
                <img className={classes.avatar} src={userDef} alt="avatar"/>
            </div>
            <div>
                Name
            </div>
            <div>
                Info
            </div>

        </main>
    )
}

export default ProfileInfo