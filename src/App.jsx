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
  const getResult = async () => {
    await axios.request(options).then((res) => setValue(res.data.results));
  };
  setTimeout(() => {
    getResult();
  }, 1000);
  return (
    <div className="main-sect">
      {value.map((value) => {
        return (
          <div key={JSON.stringify(value.id)} className="card">
            <img className="image"
              src={value.primaryImage.url}
              alt="movie image"
            />
            <h1>{(value.primaryImage.caption.plainText)}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
9