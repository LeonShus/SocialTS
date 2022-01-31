import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Users} from "./Components/Users/UsersContainer";
import {Profile} from "./Components/Profile/Profile";
import {Container} from "@mui/material";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Login} from "./Components/Login/Login";
import {Header} from "./Components/Header/Header";
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


    if (!isInitialised) {
        return <Preloader/>
    }
    return (
        <BrowserRouter>
            <Header/>
            <Container sx={{mt: "5.5rem"}}>
                <main>
                    <Routes>
                        <Route path="/profile/:userId" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>

                </main>

            </Container>

        </BrowserRouter>

    );
}