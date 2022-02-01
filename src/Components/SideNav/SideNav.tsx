import React from "react";
import classes from './SideNav.module.css'
import {NavLink} from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Chat, Home, PeopleAlt} from "@mui/icons-material";

type  SideNavPropsType = {
    isOpen: boolean
    close: () => void
}

export const SideNav = ({isOpen, close}: SideNavPropsType) => {
    return (
        <Drawer
            anchor={"left"}
            open={isOpen}
            onClose={close}
        >
            <div className={classes.links}>
                <List sx={{padding: "20px"}} onClick={close}>
                    <ListItem sx={{mt: "40px"}}>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <NavLink to="/profile">Profile</NavLink>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PeopleAlt/>
                        </ListItemIcon>
                        <NavLink to="/users">Users</NavLink>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Chat/>
                        </ListItemIcon>
                        <NavLink to="/dialogs">Dialogs</NavLink>
                    </ListItem>
                </List>
            </div>

        </Drawer>
    )
}

export default SideNav