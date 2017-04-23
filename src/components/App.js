import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      1:'translate(0, 110%)',
      2:'translate(0, 110%)',
      3:'translate(0, 110%)',
      4:'translate(0, 110%)',
      5:'translate(0, 110%)',
      6:'translate(0, 110%)',
      7:'translate(0, 110%)',
      8:'translate(0, 110%)',
      9:'translate(0, 110%)',
      gameHasStarted: false,
      score: 0
    };
  }

  startGame(){
    if ( this.state.gameHasStarted){ return; }
    else { this.setState({ gameHasStarted: true }); }

    this.setState({ score: 0 });
    var x = 0;
    var intervalID = setInterval(() => {
      this.displayMoles();
     if (++x === 15) {
      window.clearInterval(intervalID);
      this.clearMoles();
      this.setState({ gameHasStarted: false });
     }
    }, 1000);
  }

  clearMoles(){
    for(var value in this.state){
      if (!isNaN(value)){
        this.setState({
          [value]: 'translate(0, 110%)'
        });
      }
    }
  }

  displayMoles(){
    this.clearMoles()
    var activeMole = Math.floor(Math.random() * 10);
    this.setState({
      [activeMole]: 'translate(0, 20%)'
    });
  }

  addToScore(){
    this.setState({ score: [parseInt(this.state.score, 10) + 1] })
  }

  render() {
    return (
      <div className="main-container">
        <button className="button-text"type="button" onClick={ this.startGame.bind(this) }>Start Game!</button>
        <div>
          <h3>Score: {this.state.score}</h3>
        </div>
        <div className="game">
          <h1 className="game__title">WHACK-A-MOLE</h1>
          <div className="game__hole">
            <div className={"game__mole mole-1"} onClick={ this.addToScore.bind(this) } style={{transform: this.state['1']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-2" style={{transform: this.state['2']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-3" style={{transform: this.state['3']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-4" style={{transform: this.state['4']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-5" style={{transform: this.state['5']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-6" style={{transform: this.state['6']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-7" style={{transform: this.state['7']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-8" style={{transform: this.state['8']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-9" style={{transform: this.state['9']}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
