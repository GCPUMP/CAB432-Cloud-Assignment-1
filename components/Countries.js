
import React, { useState, useEffect } from "react";

function DropdownControlled(props) {
  const [countrys, setCountry] = useState([]);

  useEffect(() => {
    fetch("http://131.181.190.87:3000/countries")
      .then((res) => res.json())
      .then((countrys) => setCountry(countrys));
  }, []);

function SortTable(){
    var url  = "http://131.181.190.87:3000/rankings"
    var yearValue = document.getElementById("year-dropdown").value;
   var countryValue = document.getElementById("countrys_dropdown").value;


    if(countryValue != "Select by Country" && yearValue != "Select By Year"){
    url = url + "?year=" + yearValue + "&country=" + countryValue
    }
    else if (yearValue != "Select By Year"){
    url = url + "?year=" + yearValue
    }
    else if (countryValue != "Select by Country"){
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
     ;}

    const [rowData, setRowData] = useState([]);

  return (
    <div>

      <label htmlFor="countrys"></label>
      <select

        onChange={(event) => {
          props.onChange(event.target.value);
          SortTable();
        }}
        name="countrys"
        id="countrys_dropdown"
      >
        <option key="">Select by Country</option>
        {countrys.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}

export default function App() {
  const [country, setCountry] = useState(null);

  return (
    <div className="App">

      <DropdownControlled onChange={setCountry} />
    </div>
  );
}
