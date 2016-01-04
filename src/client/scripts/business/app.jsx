'use strict';

import React from '../thirdParty/react/react';
import ReactDOM from '../thirdParty/react/react-dom';
import HomePage from './components/homePage.jsx';
import AboutPage from './components/about/aboutPage.jsx';
import Header from './components/common/header.jsx';

let App = React.createClass({
  render: function() {
    var Child;
    
    switch(this.props.route) {
      case 'about':
        Child = AboutPage;
        break;
      default: 
        Child = HomePage;        
    }
    
    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
});

function render() {
  var route = window.location.hash.substr(1);
  
  ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();