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
import Todo from './containers/TodoList';
import NotFoundPage from './containers/NotFoundPage';
import Redux from './containers/Redux';
import {Home, HomeWork1, HomeWork2, HomeWork24, HomeWork3, HomeWork5, Final}  from "./config/urls";
import store from './store';
import { Provider} from 'react-redux';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={Home} component={App}/>
          <Route exact path={HomeWork1} component={PropsState} />
          <Route exact path={HomeWork2} component={Axios} />
          <Route exact path={HomeWork24} component={Axios} />
          <Route exact path={HomeWork3} component={Hover} />
          <Route exact path={HomeWork5} component={Redux} />
          <Route exact path={Final} component={Todo} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
