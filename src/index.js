import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/normalize.scss';
import './Styles/fonts.scss';
import './Styles/main.scss';
import './Styles/toggles.scss';
import './Styles/Jacks/socials.scss';
import './Styles/Jacks/content.scss';
import * as serviceWorker from './serviceWorker';
import SadBear from './Pages/SadBear/MainPage/SadBear';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ProductPage from './Pages/SadBear/ProductPage/ProductPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Jacks from './Pages/Jacks/Pages/Jacks'
import JacksChartPage from './Pages/Jacks/Pages/ChartPage'
import JacksProductPage from './Pages/Jacks/Pages/ProductPage'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={SadBear} />
          <Route path="/product" component={ProductPage} />
          <Route path="/pumpkinjacks/chart" component={JacksChartPage} />
          <Route path="/pumpkinjacks/product" component={JacksProductPage} />
          <Route path="/pumpkinjacks" component={Jacks} />
        </Switch>
      </App>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

