import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import PropsState from './containers/PropsState';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter,Route} from 'react-router-dom';


ReactDOM.render(
  (
    <HashRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/ps" component={PropsState} />
    </HashRouter>
  ), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
