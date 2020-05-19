import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Gallery from '././components/Gallery/Gallery';



const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/welcome" component={Welcome}/>
          <Route path="/gallery" component={Home}/>
          
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;