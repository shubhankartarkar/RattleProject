import React from 'react';
import Common from './Common';
import AppBar from './Components/AppBar/Index.jsx';
import Cart from './Components/Cart/Index.jsx';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />

      <AppBar title="Rattle Shop"/>
      <Switch>
        <Route exact path="/" component={Common} />
        <Route path="/Mycart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
