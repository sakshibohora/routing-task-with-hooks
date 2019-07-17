import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import Admin from './component/Admin'
import Logout from './component/Logout'
import User from './component/User'
import Client from './component/Client'
import NotFound from './component/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Route path="/user" component={User} />
        <Route path="/client" component={Client} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
