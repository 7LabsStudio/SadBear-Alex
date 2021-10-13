import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/normalize.scss';
import './Styles/fonts.scss';
import './Styles/main.scss';
import * as serviceWorker from './serviceWorker';
import SadBear from './Pages/SadBear/SadBear';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ProductPage from './Pages/ProductPage/ProductPage';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={SadBear} />
          <Route path="/product" component={ProductPage} />
        </Switch>
      </App>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

