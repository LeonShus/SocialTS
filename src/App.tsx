import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {Profile} from "./Components/Profile/Profile";
import {Container} from "@mui/material";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import Dialogs from "./Components/Dialogs/Dialogs";


export const App = () => {
    return (
        <BrowserRouter>
            <HeaderContainer/>

            <Container sx={{mt: "5.5rem"}}>

                <main>
                    <Route path="/profile/:userId?" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </main>

            </Container>

        </BrowserRouter>

    );
}