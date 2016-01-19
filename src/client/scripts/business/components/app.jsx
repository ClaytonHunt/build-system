'use strict';

import React from '../../thirdParty/react/react';
import ReactDOM from '../../thirdParty/react/react-dom';
import Header from './common/header.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Header />
          { this.props.children }
      </div>
    );
  }
});