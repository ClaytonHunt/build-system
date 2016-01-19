'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory';

import App from './components/app.jsx';
import HomePage from './components/home/homePage.jsx';
import AboutPage from './components/about/aboutPage.jsx';
//import ApplicationInitialization from './app.initialization';

//ApplicationInitialization.init();

ReactDOM.render((
        <Router history={ createHashHistory({ queryKey: null }) }>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="about" component={ AboutPage }>

                </Route>
            </Route>
        </Router>),
    document.getElementById('app'));