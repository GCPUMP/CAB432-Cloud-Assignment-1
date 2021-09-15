import './App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from './Countries';

export default function App() {

   let token = localStorage.getItem("token");

  const [country, setCountry] = useState(null);

    const columns = [
        { headerName: "Rank", field: "rank" },
        { headerName: "Country", field: "country" },
        { headerName: "Score", field: "score" },
        { headerName: "Economy", field: "economy" },
        { headerName: "Family", field: "family" },
        { headerName: "Health", field: "health" },
        { headerName: "Freedom", field: "freedom" },
        { headerName: "Generosity", field: "generosity" },
        { headerName: "Trust", field: "trust" },

    ]

    const [rowData, setRowData] = useState([]);
    const [yearState, setyearState] = useState("");


function SortTable(){
    var yearValue = document.getElementById("year-dropdown").value;
   var countryValue = document.getElementById("countrys_dropdown").value;

   if(yearValue != "Select By Year"){
    var url  = "http://131.181.190.87:3000/factors/" + yearValue

    if (countryValue != "Select by Country"){
    url = url + "?country=" + countryValue
    }

    const headers= {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + token
    }

        fetch(url, { headers })
            .then((data) => data.json())
            .then((data) =>
                data.map((works) => {
                    return {
                        rank: works.rank,
                        country: works.country,
                        score: works.score,
                        year: works.year,
                        economy: works.economy,
                        family: works.family,
                        health: works.health,
                        freedom: works.freedom,
                        generosity: works.generosity,
                        trust: works.trust,
                    };
                })
            )
            .then((finaldata) => setRowData(finaldata));
     ;
   }
else{
setMessage("Year Required");
}
}


function DropdownControlled(props) {
  const [countrys, setCountry] = useState([]);

  useEffect(() => {
    fetch("http://131.181.190.87:3000/countries")
      .then((res) => res.json())
      .then((countrys) => setCountry(countrys));
  }, []);

  return (
    <div>
      <label htmlFor="countrys"></label>
      <select

        onChange={(event) => {
          props.onChange(event.target.value);
        SortTable();
        }}
        name="countrys"
        id="countrys"
      >
        <option key="">Select by Country</option>
        {countrys.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}

    const [yearMessage, setMessage] = useState('');

    return (

      <div className = "body" >

<div className="Header-Section">
        <h1> Factors </h1>
</div>

<div className="Table-Section">

      <select id="year-dropdown">
    <option value="Select By Year">Select By Year</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      </select>

<div className="Year-Message">
        {yearMessage ? <p> {yearMessage}</p> : null}
</div>

<Countries></Countries>
       <button onClick={() => SortTable()}>Generate</button>

        <div className = "ag-theme-balham"
        style = {
            {
                height: "300px",
                width: "1200px"
            }
        } >
        <
        AgGridReact columnDefs = { columns }
        rowData = { rowData }
        pagination = { false }
        paginationPageSize = { 7 }
        /> </div>

<chart></chart>

</div>
        </div>
    );
}
