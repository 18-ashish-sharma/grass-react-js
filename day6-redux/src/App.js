import { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState(1);
  return (
    <div className="App">
     {value}
     <br />
     <button onClick={() => setValue(20)}>Click</button>
    </div>
  );
}

export default App;
