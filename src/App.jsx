import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [value, setValue] = useState([]);
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    headers: {
      "X-RapidAPI-Key": "eece9701d5msh16333191a55c652p17b5b7jsnb7792f8d8b1c",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const getResult = async() => {
    await axios.request(options).then((res) => setValue(res.data.results));
  };
  getResult()
  // console.log(value);
  return (
    <div className="main-sect">
      {
        value.map(item => {
          return <div className="card">
          {/* <h1>{item}</h1> */}
          <img src={(item.primaryImage.url)} style={{width:'300px',height:'300px'}} alt="" />
        </div>
        })
      }
    </div>
  );
}

export default App;
