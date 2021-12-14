import React, {useEffect, useState} from "react";
import classes from "./Header.module.css"
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import {Chat, Home, PeopleAlt} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {getAuthUserT, logOutT} from "../../Redux/Reducers/AuthReducer";


export const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state: AppStateType) => state.authUser.login)

    useEffect(() => {
        dispatch(getAuthUserT())
    }, [])

    const [isSideNavOpen, setSideNavOpen] = useState<boolean>(false)

    const openSideNav = () => {
        setSideNavOpen(true)
    }

    const closeSideNav = () => {
        setSideNavOpen(false)
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
                            <NavLink to="/profile" activeClassName={classes.active}>
                                <Home fontSize={"large"}/>
                            </NavLink>
                        </IconButton>

                        <IconButton>
                            <NavLink to="/users" activeClassName={classes.active}>
                                <PeopleAlt fontSize={"large"}/>
                            </NavLink>

                        </IconButton>

                        <IconButton>
                            <NavLink to="/dialogs" activeClassName={classes.active}>
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
                                    onClick={() => dispatch(logOutT())}
                                    sx={{border: "1px solid white", color: "white"}}
                            >Out</Button>
                        </>

                    }

                </Toolbar>
            </AppBar>
        </header>
    )
}
