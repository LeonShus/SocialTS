import React, {useState} from "react";
import classes from "./Header.module.css"
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import {Chat, Home, PeopleAlt} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import SideNav from "../SideNav/SideNav";

type HeaderPropsType = {
    userLogin: string | null
}

export const Header = (props: HeaderPropsType) => {

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
                    {!props.userLogin
                        ?
                        <Typography
                            variant={"h6"}
                            component={"span"}

                        >
                            login, ava
                        </Typography>
                        :
                        <Typography
                            variant={"h6"}
                            component={"span"}

                        >
                            {props.userLogin}
                        </Typography>
                    }

                </Toolbar>
            </AppBar>
        </header>
    )
}
