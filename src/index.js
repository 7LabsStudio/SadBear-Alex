import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import './Styles/normalize.scss';
import './Styles/fonts.scss';
import './Styles/main.scss';
import './Styles/toggles.scss';


import SadBear from './SadBear/Pages/MainPage/SadBear';
import BearChartPage from './SadBear/Pages/ChartPage/ChartPage';
import BearProductPage from './SadBear/Pages/ProductPage/ProductPage'


import CupidsPage from './Cupids/Pages/CupidsPage/CupidsPage'
import CupidsChartPage from './Cupids/Pages/ChartPage/ChartPage'


import Jacks from './Jacks/Pages/Jacks'
import JacksChartPage from './Jacks/Pages/ChartPage'
import JacksProductPage from './Jacks/Pages/ProductPage'

import Snowmen from './Snowmen/Pages/Snowmen/Snowmen'
// import JacksChartPage from './Jacks/Pages/ChartPage'
// import JacksProductPage from './Jacks/Pages/ProductPage'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={SadBear} />
          <Route path="/product" component={BearProductPage} />
          <Route path="/chart" component={BearChartPage} />
          <Route path="/pumpkinjacks/chart" component={JacksChartPage} />
          <Route path="/pumpkinjacks/product" component={JacksProductPage} />
          <Route path="/pumpkinjacks" component={Jacks} />
          <Route path="/cupids/chart" component={CupidsChartPage} />
          <Route path="/cupids" component={CupidsPage} />
          <Route path="/snowmen" component={Snowmen} />
        </Switch>
      </App>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

