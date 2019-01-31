import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./Home";



const AppRoute = () => (
  <div>
    {/*Add routes here e.g <Route path="path" component={Component}/>*/}
    <Route exact path='/' component={Home} />
  </div>
);

export default AppRoute;
