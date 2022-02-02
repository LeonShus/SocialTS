import React, {memo} from "react";
import userDef from "../../DefaultItems/Img/userDef.png"
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {UserType} from "../../Redux/Reducers/UsersReducer";


export type UsersPropsType = {
    followUserCallBack: (id: number) => void
    unfollowUserCallBack: (id: number) => void
}

export const UsersCont = memo(({followUserCallBack, unfollowUserCallBack}: UsersPropsType) => {
    const users = useSelector<AppStateType, UserType[]>(state => state.usersPage.users)
    const followInProgress = useSelector<AppStateType, number[]>(state => state.usersPage.followInProgress)


    const usersJsxArray = users.map(u => {
        const followButton = !u.followed
            ? <Button disabled={followInProgress.some(el => el === u.id)}
                      onClick={() => followUserCallBack(u.id)}
                      size={"small"}
                      variant="contained">follow</Button>
            : <Button disabled={followInProgress.some(el => el === u.id)}
                      onClick={() => unfollowUserCallBack(u.id)}
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
})