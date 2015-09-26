/*  require("!url?limit=10000!../images/your-image.jpg"); */


//  Require the styles so webpack will eat them up
var css = require("!style!css!less!../css/exports/core.less");

import React from "react";

const App = React.createClass({
  render() {
    return (
      <main className="main">
        <h1>Hello World</h1>
      </main>
    )
  }
});

//  Renders the app to the body
React.render((
  <App />
), document.body);