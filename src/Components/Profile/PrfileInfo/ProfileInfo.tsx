import classes from "./ProfileInfo.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import React from "react";
import {UserType} from "../../../Redux/Reducers/ProfileReducer";
import {Avatar, Grid, Typography} from "@mui/material";

type ProfileInfoPropsType = {
    user: UserType
}

const ProfileInfo = ({user}: ProfileInfoPropsType) => {

    const getUserPhoto = () => {
        return user.photos && user.photos.small ? user.photos.small : userDef
    }

    return (
        <Grid container
              sx={{
                  border: "1px solid black",
                  mb: "40px"
              }}
        >
            <Grid item>
                <Avatar className={classes.avatar}
                        src={getUserPhoto()}
                        alt={user.fullName}
                        sx={{width: "150px", height: "150px"}}
                />
            </Grid>
            <Grid item
                  sx={{ml: "20px"}}
            >
                <Typography sx={{fontSize: "2.2rem", fontWeight: '300'}}>
                    {user.fullName}
                </Typography>

                <Grid container>
                    <Typography sx={{fontSize: "1.2rem"}}>
                        {user.aboutMe}
                    </Typography>

                </Grid>
            </Grid>


        </Grid>
    )
}

export default ProfileInfo