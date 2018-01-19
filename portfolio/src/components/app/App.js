import React, { Component } from 'react';
import './App.css';
import Begin from '../begin/begin.js';
import Audio from '../audio/audio.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Begin text="{execute portfolio}">
          <Audio src="./sounds/galaxy.mp3"/>
        </Begin>
      </div>
    );
  }
}

export default App;
