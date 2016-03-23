import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import GraphDemo from './components/GraphDemo';
import About from './components/About';
import NoMatch from './components/404';

window.React = React;
const mountNode = document.getElementById('app');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="graphs" component={GraphDemo} />
      <Route path="about" component={About} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), mountNode);
