import React from 'react';
import Menu from './components/menuBar/menu.js'
import Banner from './components/banner/banner.js'
import TitleBot from "./components/TitleBot/TitleBot.js";
import Post from "./components/post/Post.js";
import Competintion from './components/CompetitionBar/Competition.js'
import Heros from './components/Heroes/Heroes.js'
import ReadySearch from "./components/readySreach/ReadySearch";
import NewsFootball from "./components/NewsFootball/NewsFootball.js"
import Branding from "./components/Brandimg/Branding.js";
import Footer from "./components/footer/Footer";
const App = () => {


    return (
        <React.Fragment>
            <Menu/>
            <Banner/>
            <TitleBot isboten="true" littext="Upcoming" boldtext="Competitions"/>
            <Post/>
            <TitleBot isboten="false" littext="Competition" boldtext=" of heroes"/>
            <Competintion/>
            <TitleBot isboten="true" littext="FIFA" boldtext="HEROES"/>
            <Heros/>
            <ReadySearch/>
            <TitleBot isboten="true" littext="World" boldtext="Football News"/>
            <NewsFootball/>
            <TitleBot isboten="true" littext="FIFA" boldtext="PARTNERS"/>
            <Branding/>
                <Footer/>
        </React.Fragment>
    );
};

export default App;