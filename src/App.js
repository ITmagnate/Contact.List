import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Components/Card/index.jsx";

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div className="App">
      {results.map((result, index) => {
        return (
          <Card
            key={index}
            name={result.name.first}
            email={result.email}
            imgUrl={result.picture.large}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
}

export default App;
