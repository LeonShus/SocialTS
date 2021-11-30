import React from "react";
import {UserType} from "../../Redux/Reducers/UsersReducer";
import userDef from "../../DefaultItems/Img/userDef.png"
import Button from "@mui/material/Button";
import {Avatar, ButtonBase, Grid, Paper, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


export type UsersPropsType = {
    users: Array<UserType>
    followUserCallBack: (id: number) => void
    unfollowUserCallBack: (id: number) => void
}

const Users = ({users, ...props}: UsersPropsType) => {

    const changeToFollow = (id: number) => {
        props.followUserCallBack(id)
    }
    const changeToUnfollow = (id: number) => {
        props.unfollowUserCallBack(id)
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
            <Grid item xs={8} key={u.id}>
                <Paper elevation={3} sx={{p: 2, maxWidth: 400, flexGrow: 1, mt: 2}}>
                    <Grid container spacing={3}>

                        <Grid item>
                            <ButtonBase sx={{width: 80, height: 80, position: "relative", top: 10}}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <Avatar alt={u.name ? u.name : undefined}
                                            src={!u.photos.small ? userDef : u.photos.small}
                                            sx={{width: 80, height: 80}}
                                    />
                                </NavLink>
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