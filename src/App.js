import React from 'react';
import './App.css';
import FormData from './Components/FormData'

function App() {

  return (
    <div className="AppBody">
    <h1 style={{textAlign:"center"}}>File Meta-Data Reader App</h1>
    <div className="App">
    <div className="AppComponents">
      <FormData/>
      </div>
    </div>

    </div>
  );
}

export default App;