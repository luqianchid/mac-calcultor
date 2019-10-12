import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Table from './List/TableBody';
import Calcultor from './Calc/Calcultor';

export default (
  <div className="tab-pane">
    <Route path="/" component={ App }></Route>  
    <Route exact path="/calu" component={ Calcultor }></Route>
    <Route path="/list" component={ Table }></Route>
  </div>
)