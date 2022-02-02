import React, {memo, useState} from "react";
import classes from "./Header.module.css"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import {Chat, Home, PeopleAlt} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {logOutT} from "../../Redux/Reducers/AuthReducer";


export const Header = memo(() => {
    const dispatch = useDispatch()
    const userLogin = useSelector<AppStateType, string | null>(state => state.authUser.login)

    let mainUserId = useSelector<AppStateType, number | null>(state => state.authUser.id)

    const [isSideNavOpen, setSideNavOpen] = useState<boolean>(false)

    const openSideNav = () => {
        setSideNavOpen(true)
    }

    const closeSideNav = () => {
        setSideNavOpen(false)
    }

    const btnLogOut = () => {
        dispatch(logOutT())
    }

    return (
        <header className={classes.btn}>
            <AppBar>
                <Toolbar>
                    <SideNav isOpen={isSideNavOpen} close={closeSideNav}/>
                    <IconButton
                        size={"large"}
                        edge={"start"}
                        color="inherit"
                        onClick={openSideNav}
                    >
                        <MenuIcon fontSize={"large"}/>
                    </IconButton>

                    <Typography
                        variant={"h6"}
                        component={"span"}
                        sx={{flexGrow: 1}}
                    >
                        WebSocial
                    </Typography>

                    <Grid container sx={{ml: "30px"}}>
                        <IconButton>
                            {mainUserId
                                ?
                                <NavLink to={`/profile/${mainUserId}`}>
                                    <Home fontSize={"large"}/>
                                </NavLink>
                                :
                                <NavLink to={`/login`}>
                                    <Home fontSize={"large"}/>
                                </NavLink>
                            }
                        </IconButton>

                        <IconButton>
                            <NavLink to="/users">
                                <PeopleAlt fontSize={"large"}/>
                            </NavLink>

                        </IconButton>

                        <IconButton>
                            <NavLink to="/dialogs">
                                <Chat fontSize={"large"}/>
                            </NavLink>
                        </IconButton>
                    </Grid>

                    {/*LoginName or LoginButton*/}
                    {!userLogin
                        ?
                        <NavLink to={"/login"}>
                            <Button variant={"contained"}
                                    sx={{border: "1px solid white", color: "white"}}>
                                Login
                            </Button>
                        </NavLink>
                        :
                        <>
                            <Typography
                                variant={"h6"}
                                component={"span"}

                            >
                                {userLogin}
                            </Typography>
                            <Button variant={"contained"}
                                    size={"small"}
                                    onClick={btnLogOut}
                                    sx={{border: "1px solid white", color: "white"}}
                            >Out</Button>
                        </>

                    }

                </Toolbar>
            </AppBar>
        </header>
    )
})
