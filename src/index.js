import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import PropsState from './containers/PropsState';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Axios from './containers/Axios';
import Hover from './containers/Hover';
import NotFoundPage from './containers/NotFoundPage';


ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/hack1" component={PropsState} />
        <Route exact path="/hack2" component={Axios} />
        <Route path="/hack2/:index" component={Axios} />
        <Route path="/hack3" component={Hover} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
