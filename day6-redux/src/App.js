import { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(10);
  function handleClick() {
    setValue(value + 1);
    setValue1(value1 + 1);
  }
  return (
    <div className="App">
     {value}
     <br />
     {value1}
     <br />
     <button onClick={() => handleClick()}>Click</button>
    </div>
  );
}

export default App;
