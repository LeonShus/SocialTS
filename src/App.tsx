import React, {useEffect} from "react";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {Users} from "./Components/Users/Users";
import {Profile} from "./Components/Profile/Profile";
import Container from "@mui/material/Container";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Login} from "./Components/Login/Login";
import {Header} from "./Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/ReduxStore";
import {Preloader} from "./DefaultItems/Preloader/Preloader";
import {getAuthUserT} from "./Redux/Reducers/AuthReducer";


export const App = () => {
    const dispatch = useDispatch()
    const isInitialised = useSelector<AppStateType, boolean>(state => state.app.initialised)

    // const isAuth = useSelector<AppStateType, boolean>(state => state.authUser.isAuth)


    useEffect(() => {
        dispatch(getAuthUserT())
    }, [dispatch])


    if (!isInitialised) {
        return <Preloader/>
    }

    console.log('APP')
    return (
        <HashRouter>
            <Header/>
            <Container sx={{mt: "5.5rem"}}>
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/login"}/>}/>
                        <Route path="/profile/:userId" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </main>
            </Container>
        </HashRouter>
    );
}