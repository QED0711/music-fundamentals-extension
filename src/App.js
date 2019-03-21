import React, { Component } from 'react';

import './App.css';
import './css/input.css'

import TokenChecker from './components/TokenChecker';




class App extends Component {
  render() {
    return (
      <div className="App">
        <TokenChecker />
      </div>
    );
  }
}

export default App;
