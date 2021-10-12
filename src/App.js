import React from 'react';
import SadBear from './Pages/SadBear/SadBear';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SadBear}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
