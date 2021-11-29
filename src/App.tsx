import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Container} from "@mui/material";
import HeaderContainer from "./Components/Header/HeaderContainer";


export const App = () => {
    return (
        <BrowserRouter>
            <HeaderContainer/>

            <Container sx={{mt: "5.5rem"}}>

                <main>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </main>

            </Container>

        </BrowserRouter>

    );
}