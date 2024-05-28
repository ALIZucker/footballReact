import React from 'react';
import Menu from './components/menuBar/menu.js'
import Banner from './components/banner/banner.js'
import TitleBot from "./components/TitleBot/TitleBot.js";
import Post from "./components/post/Post.js";
import S from './App.css'
const App = () => {


    return (
        <React.Fragment>
            <Menu/>
            <Banner/>
            <TitleBot isboten="true"/>
            <Post/>
            <TitleBot isboten="false"/>
        </React.Fragment>
    );
};

export default App;