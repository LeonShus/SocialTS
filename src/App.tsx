import React from 'react';
import classes from './App.module.css'
import Header from "./Components/Header/Header";
import AsideNav from "./Components/AsideNav/AsideNav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs, {MessagesType, UsersType} from "./Components/Dialogs/Dialogs";
import Users from "./Components/Users/Users";
import {StateType} from "./index";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    console.log(props, 'APP')
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
                    <Route path="/profile" render={() => <Profile postsData={props.state.postData} />}/>
                    <Route path="/dialogs" render={() => <Dialogs messages={props.state.message} users={props.state.users}/>}/>
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
