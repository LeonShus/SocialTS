import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
    return (
        <header>
            <AppBar>
                <Toolbar>

                    <IconButton>
                        <MenuIcon/>
                    </IconButton>

                    <Typography>
                        WebSocial
                    </Typography>

                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header