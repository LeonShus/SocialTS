import React from "react";
import {FollowACType, UnFollowACType, UserType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Users.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"
import Button from "@mui/material/Button";
import {Avatar} from "@mui/material";


export type UsersPropsType = {
    users: Array<UserType>
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
}

const Users = ({users, ...props}: UsersPropsType) => {

    const changeToFollow = (id: string | number) => {
        props.followAC(id)
    }
    const changeToUnfollow = (id: string | number) => {
        props.unfollowAC(id)
    }

    const usersJsxArray = users.map(u => {

        const followButton = !u.followed
            ? <Button onClick={() => changeToFollow(u.id)}
                      size={"small"}
                      variant="contained">follow</Button>
            : <Button onClick={() => changeToUnfollow(u.id)}
                      size={"small"}
                      variant="contained">Unfollow</Button>

        return (
            <div key={u.id} className={classes.container}>

                <Avatar alt={u.name ? u.name : undefined}
                        src={!u.photos.small ? userDef : u.photos.small}
                        sx={{width: 80, height: 80}}
                />
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {followButton}
                </div>
            </div>
        )
    })

    return (
        <div>
            {usersJsxArray}
        </div>
    )
}

export default Users