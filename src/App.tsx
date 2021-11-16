import React from "react";
import classes from "./App.module.css"
import Header from "./Components/Header/Header";
import AsideNav from "./Components/AsideNav/AsideNav";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


export const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Header/>
                </div>
                <div className={classes.asideNav}>
                    <AsideNav/>
                </div>

                <main className={classes.mainSection}>
                    <Route path="/profile" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </main>

                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>

    );
}