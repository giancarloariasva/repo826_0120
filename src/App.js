import React from 'react';
import Contador from './hooksComponents/UseStateHookComponent/UseStateHookComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <p class="par">
        Soy el div dentro del return dentro del App.js
      </p>
      <Contador />
    </div>
  );
}

export default App;
