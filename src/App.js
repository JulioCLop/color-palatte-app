import React, { Component } from 'react'
import './App.css';
import Palatte from './Palatte';
import seedColors from './seedColors';

class App extends Component {
  render() {
    return (
      <div  >
        <Palatte {...seedColors[4]} />
      </div>
    );
  }
  
}

export default App;
