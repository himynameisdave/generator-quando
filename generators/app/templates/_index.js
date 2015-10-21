
//  Require the styles so webpack will eat them up
var css = require("!style!css!less!../css/exports/core.less");
//  Require an image like this:
// var quandoImg = require("!url?limit=10000!../images/quando.jpg");

//  Require React
import React from "react";

//  Require a component like so
import Hello from "./components/main"

//  Main app/starting point
const App = React.createClass({
  render() {
    return (
      <main className="main">
        <Hello />
      </main>
    )
  }
});

//  Renders the app to the body
React.render((
  <App />
), document.body);
