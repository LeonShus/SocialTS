import React from "react";
import classes from "./App.module.css"
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Container} from "@mui/material";


export const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Container sx={{ mt: '4.5rem'}}>

                <main className={classes.mainSection}>
                    <Route path="/profile" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </main>

            </Container>

        </BrowserRouter>

    );
}