import './App.css';
import NavBar from './NavBar';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {

  const [country, setCountry] = useState(null);

    const columns = [
        { headerName: "Rank", field: "rank" },
        { headerName: "Country", field: "country" },
        { headerName: "Score", field: "score" },
        { headerName: "Year", field: "year" },
    ]

    const [rowData, setRowData] = useState([]);

function SortTable(){
    var url  = "http://131.181.190.87:3000/rankings"
    var countryValue = document.getElementById("country-search").value;

if(countryValue){
    url = url + "?country=" + countryValue
}

        fetch(url)
            .then((data) => data.json())
            .then((data) =>
                data.map((works) => {
                    return {
                        rank: works.rank,
                        country: works.country,
                        score: works.score,
                        year: works.year
                    };
                })
            )
            .then((finaldata) => setRowData(finaldata));
     ;

}

    return (

      <div className="body">

      <div className="Header-Section">
        <h1>Search for Country</h1>
</div>

<div className="Table-Section">

<input type="search" id="country-search" placeholder="Search Country"></input>
                   <button onClick={() => SortTable()}>Search</button>


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
        />
 </div>
</div>
        </div>
    );
}
