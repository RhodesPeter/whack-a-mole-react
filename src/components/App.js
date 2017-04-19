import React, { Component } from 'react';
import '../App.css';


class App extends Component {

  constructor(){
    super();
    this.displayMoles();
  }

  displayMoles(){
    const moles = document.querySelectorAll('.game__mole');
    const game = document.getElementsByTagName('div');
    const mole = document.getElementsByClassName('.game__mole')[0];
    console.log(moles, game, mole);
    return Math.floor(Math.random() * moles.length + 1);
  }

  render() {
    return (
      <div className="main-container">
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
