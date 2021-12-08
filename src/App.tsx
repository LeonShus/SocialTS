import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Users} from "./Components/Users/UsersContainer";
import {Profile} from "./Components/Profile/Profile";
import {Container} from "@mui/material";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Login} from "./Components/Login/Login";
import {Header} from "./Components/Header/Header";


export const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Container sx={{mt: "5.5rem"}}>
                <main>
                    <Route path="/profile/:userId?" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/users" render={() => <Users/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </main>

            </Container>

        </BrowserRouter>

    );
}