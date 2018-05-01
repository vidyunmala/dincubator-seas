import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Season Ahead</h1>
        </header>
        <p className="App-intro">
         In this webpage we will show the multiple uses of seasonal forecasts. How to use them, what are the quality checks behind the datasets. User needs that can be resolved through the same. We look forward to interacting with you soon.  
        </p>


        < h2 className="App description"> STAY TUNED!! </h2>

      </div>
  

      
    );
  }
}

export default App;
