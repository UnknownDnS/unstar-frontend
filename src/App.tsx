import React from 'react';
import './App.css';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = loadable(() => import('layouts/Main'));
const SignUp = loadable(() => import('pages/SignUp'));
const LogIn = loadable(() => import('pages/LogIn'));

function App() {
  return (
    <>
      <Switch>
        <Redirect exact path="/" to="/board" />
        <Route path={['/board', '/profile']} component={Main} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
