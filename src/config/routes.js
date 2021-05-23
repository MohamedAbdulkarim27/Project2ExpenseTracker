import { Switch, Route } from 'react-router-dom';
import React from 'react';
import MainContainer from '../container/MainContainer';
import LandingPage from "../pages/LandingPage";


function Routes() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={MainContainer} />
  
        
      </Switch>
    );
  }
  
  export default Routes;
