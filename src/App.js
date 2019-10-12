import React from 'react';
import './main.scss'
import { BrowserRouter as Route } from "react-router-dom";
import Header from './List/Header';
import Navbar from './List/NavBar';
import routers from './router';

function App() {
  return (
    <div className="content">
      <Header username="尹丰硕" isLogin title="每天进步一点点，离目标更近一点点！"/>
      <div className="tab-container">
        <Route>
          <Navbar />
          { routers }
        </Route>
      </div> 
    </div>
  );
}

export default App;
