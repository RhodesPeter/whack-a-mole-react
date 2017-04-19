import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="game">
          <h1 className="game__title">WHACK-A-MOLE</h1>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
          <div className="game__hole"></div>
        </div>
      </div>

      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
