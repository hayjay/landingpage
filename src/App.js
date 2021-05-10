import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./components/Home";
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/our-team" exact component={TeamPage} />
        <Route path="/contact" exact component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin/registered-users" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
