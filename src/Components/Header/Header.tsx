import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

const Header = () => {
    return (
        <header>
            <AppBar position={"static"}>
                <Toolbar>

                    <IconButton
                        size={"large"}
                        edge={"start"}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography
                        variant={"h6"}
                        component={"span"}
                        sx={{flexGrow: 1}}
                    >
                        WebSocial
                    </Typography>

                    <Typography
                        variant={"h6"}
                        component={"span"}

                    >
                        login, ava
                    </Typography>


                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header