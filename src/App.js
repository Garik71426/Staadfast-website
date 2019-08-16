import React from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import MainContent from './components/MainContent/MainContent';
import Services from './components/Services';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import OpenSource from './components/OpenSource';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    return (
    	<div className = 'sf_website'>
            <NavigationBar />
            <div id = 'home'>
                <MainContent />
            </div>
            <div id='service'>
                <Services />
            </div>
            <div id='portfolio'>
                <Portfolio />
            </div>
            <div id='opensource'>
                <OpenSource />
            </div>
            <div id = 'contact'>
                <Footer />
            </div>
        </div>
    );
}

export default App;