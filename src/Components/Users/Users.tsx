import React from "react";
import {FollowACType, UnFollowACType, UserType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Users.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"
import Button from "@mui/material/Button";
import {Avatar, ButtonBase, Grid, Paper, Typography} from "@mui/material";


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
            <Grid item xs={8}>
                <Paper elevation={3} sx={{p: 2, maxWidth: 400, flexGrow: 1, mt: 2}}>
                    <Grid container spacing={3}>

                        <Grid item>
                            <ButtonBase sx={{width: 80, height: 80, position: "relative", top: 10}}>
                                <Avatar alt={u.name ? u.name : undefined}
                                        src={!u.photos.small ? userDef : u.photos.small}
                                        sx={{width: 80, height: 80}}
                                />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>

                                    <Typography
                                        gutterBottom
                                        variant={"subtitle1"}
                                        component={"div"}
                                        sx={{fontSize: "1.3rem"}}
                                    >
                                        {u.name}
                                    </Typography>

                                    <Typography variant={"body2"}>
                                        {u.status}
                                    </Typography>

                                </Grid>
                                <Grid item>
                                    {followButton}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    })

    return (
        <>
            {usersJsxArray}
        </>
    )
}

export default Users