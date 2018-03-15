import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import PSDWebsites from './PSDWebsites';
import Nav from './PSDWebsitesNav';
import UIKits from './UIKits';
import PremiumPSD from './PremiumPSD';
import About from './About';
import Blog from './Blog';

class App extends Component {


  render() {

    return (
      <Router>
        <Fragment>
          <Nav />

          <Route exact path="/" component={PSDWebsites} />
          <Route path="/uikits" component={UIKits} />
          <Route path="/premium" component={PremiumPSD} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
