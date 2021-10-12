import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Aside.module.css"


const AsideNav = () => {
    return (
        <aside>
            <div className={classes.links}>
                <div>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink>
                </div>
            </div>
        </aside>
    )
}

export default AsideNav