import React, {useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Users} from "./Components/Users/UsersContainer";
import Profile from "./Components/Profile/Profile";
import {Container} from "@mui/material";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Login} from "./Components/Login/Login";
import {Header} from "./Components/Header/Header";
import {getAuthUserT} from "./Redux/Reducers/AuthReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/ReduxStore";
import {Preloader} from "./DefaultItems/Preloader/Preloader";
import {initialisedAppT} from "./Redux/Reducers/AppReducer";


export const App = () => {
    const dispatch = useDispatch()
    const isInitialised = useSelector<AppStateType, boolean>(state => state.app.initialised)

    useEffect(() => {
        dispatch(initialisedAppT())
    }, [])


    if(!isInitialised){
        return <Preloader/>
    }
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