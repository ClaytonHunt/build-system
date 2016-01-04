'use strict';

import React from '../../thirdParty/react/react';

let HomePage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>
          React, React Router, and Flux for ultra-responsive web apps.
        </p>
      </div>
    );
  }
});

export default HomePage;