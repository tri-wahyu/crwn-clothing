import React from "react";
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopePage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
