// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Add from './calculator/Calculator';
// import express from 'express'; // es- 6
// const express = require('express'); // es 5

function App() {
  // state
  // text - state
  // setText - function to manipulate state
  // useState('')  - empty string is the default value of state num, string, boolean, object, array
  //       state  function
  // const[ashish, minut]
  // const [text, setText] = useState('Shubham');
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
        <br />
        <button onClick={() => setText('Aayushi')}>Change Text</button>
      </header> */}
      <Add />
    </div>
  );
}

export default App;