import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history"
import Header from './components/Header';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

import './App.scss';

const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route exact path="/">
            <Redirect strict to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
