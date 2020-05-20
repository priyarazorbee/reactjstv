import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Gallery from '././components/Gallery/Gallery';



const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/welcome" component={Welcome}/>
          <Route exact path="/gallery" component={Gallery}/>
          
        
      </Switch>
  </BrowserRouter>
);

export default Routes;