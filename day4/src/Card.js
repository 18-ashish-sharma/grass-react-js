import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CardComponent from "./card";
import DarkExample from "./table";

function App() {
  //     value   function             default value
  const [number, setNumber] = useState(1000);
  const [number1, setNumber1] = useState(1000);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await response.json();
    setData(jsonData);
    // console.log('data is -------', data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [number]);
  // dependency array

  return (
    <div className="App">
    <Link to="/page2">Go to Page 2</Link>
      {/* loading true and show hello (if condition)*/}
      {/* { loading && <>Hello</> } */}
      {/* if and else condition */}
      {
        loading ? <>Hello</> : <>World</>
      }
      <CardComponent title="Hello" body="Worl" />
      <br></br>
      number ----- {number}
      <br />
      number 1 ----{number1}
      <br />
      <button onClick={() => setNumber(number + 1)}>Number</button>
      <br />
      <button onClick={() => setNumber1(number1 - 1)}>Number 1</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <DarkExample /> */}
      {data.map((item, index) => {
        console.log(item.name);
        return (
          <DarkExample key={item.id} id={item.id} title={item.completed} completed={item.userId} />
        );
      })}
    </div>
  );
}

export default App;
