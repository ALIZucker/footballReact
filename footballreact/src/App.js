import React from 'react';
import Menu from './components/menuBar/menu.js'
import Banner from './components/banner/banner.js'
import S from './App.css'
const App = () => {


    return (
        <React.Fragment>
            <Menu/>
            <Banner/>
        </React.Fragment>
    );
};

export default App;