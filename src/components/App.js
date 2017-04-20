import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  // constructor(){
  //   super();
  // }

  displayMoles(){
    console.log(Math.floor(Math.random() * 10))
    return Math.floor(Math.random() * 10);
  }

  render() {
    return (
      <div className="main-container">
        <button type="button" onClick={() => this.displayMoles()}>Click Me!</button>
        <div className="game">
          <h1 className="game__title">WHACK-A-MOLE</h1>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
          <div className="game__hole">
            <div className="game__mole"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
