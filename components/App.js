import './App.css';
import NavBar from './NavBar';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";
import { Route, IndexRoute, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './Search';
import Factors from './Factors';
import Login from './Login/Login';
import Register from './Login/Register';
import Rankings from './Rankings';
import Index from './Index';



export default function App() {

return(
  <div className="App">
<Router>
  <NavBar/>
  <Route exact path="/Factors" component={Factors}/>
    <Route exact path="/Search" component={Search}/>
  <Route exact path="/Login" component={Login}/>
<Route exact path="/Register" component={Register}/>
<Route exact path="/Rankings" component={Rankings}/>
<Route exact path="/" component={Index}/>
</Router>
    </div>
);
}
