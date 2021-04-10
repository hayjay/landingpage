import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./components/Home";
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
