import React from 'react';
import classes from './App.module.css'
import Header from "./Components/Header/Header";
import AsideNav from "./Components/AsideNav/AsideNav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Users from "./Components/Users/Users";

function App() {
    return (
        <BrowserRouter>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Header/>
                </div>
                <div className={classes.asideNav}>
                    <AsideNav/>
                </div>

                <div className={classes.mainSection}>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/users" render={() => <Users/>}/>
                </div>

                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
