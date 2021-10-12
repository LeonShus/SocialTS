import React from 'react';
import classes from './App.module.css'
import Header from "./Components/Header/Header";
import AsideNav from "./Components/AsideNav/AsideNav";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={classes.container}>
        <div className={classes.header}>
            <Header/>
        </div>
        <div className={classes.asideNav}>
            <AsideNav/>
        </div>
        <div className={classes.mainSection}>
            <MainSection/>
        </div>
        <div className={classes.footer}>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
