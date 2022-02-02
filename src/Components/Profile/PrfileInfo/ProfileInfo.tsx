import classes from "./ProfileInfo.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import React, {memo} from "react";
import {UserType} from "../../../Redux/Reducers/ProfileReducer";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Status} from "./Status/Status";

type ProfileInfoPropsType = {
    user: UserType
}

export const ProfileInfo = memo(({user}: ProfileInfoPropsType) => {

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
                <Typography sx={{fontSize: "2.2rem", fontWeight: "300"}}>
                    {user.fullName}
                </Typography>

                <Status user={user}/>
            </Grid>


        </Grid>
    )
})