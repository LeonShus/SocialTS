import React from "react";
import classes from "./App.module.css"
import Header from "./Components/Header/Header";
import AsideNav from "./Components/AsideNav/AsideNav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Users from "./Components/Users/Users";
import {StateType} from "./Redux/MyState";

export type AppPropsType = {
    state: StateType
    addNewPost: (post: string) => void
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
                    <Route path="/profile" render={() => <Profile postsData={props.state.profile.postsData} addNewPost={props.addNewPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs messages={props.state.dialogs.messages} users={props.state.dialogs.users}/>}/>
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
