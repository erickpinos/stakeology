import React from 'react';
import './App.css';

import ONTGasRewards from "./components/ONTGasRewards.js";
import BlocksInRound from "./components/BlocksInRound.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">
          Stakeology
        </div>
      </header>
      <BlocksInRound />
      <ONTGasRewards />
    </div>
  );
}

export default App;
