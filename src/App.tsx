import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {Container} from "@mui/material";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Dialogs from "./Components/Dialogs/Dialogs";


export const App = () => {
    return (
        <BrowserRouter>
            <HeaderContainer/>

            <Container sx={{mt: "5.5rem"}}>

                <main>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </main>

            </Container>

        </BrowserRouter>

    );
}