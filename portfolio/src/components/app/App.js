import React, { Component } from 'react';
import './App.css';
import Begin from '../begin/begin.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Begin text="{execute portfolio}"/>
      </div>
    );
  }
}

export default App;
