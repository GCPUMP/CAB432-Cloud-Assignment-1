import './App.css';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Icon from "./images/whr-icon.png"
import { Row, Col } from "reactstrap";


export default function App() {

  return(
<div className = "body">

  <Row>
    <Col>
<div className="index-col1">
<h1>The Happiness Data App</h1>
<p>Welcome to the amazing Happiness Data App.
Above you can navigate through the different pages of the App, such as Rankings, Search and Factors.
The Factors Page can only be accessed by users who have logged into their account.</p>
</div>
</Col>
    <Col>
<img src={Icon} alt="Girl in a jacket" width="400" height="400"></img>
</Col>
  </Row>

</div>

);
  }
