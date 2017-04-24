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
      moleHasBeenWhacked: false,
      score: 0,
      lastMole: ''
    };
  }

  startGame(){
    if ( this.state.gameHasStarted){ return; }
    this.shakeScreen();

    this.setState({
      gameHasStarted: true,
      score: 0
    });

    var x = 0;
    var intervalID = setInterval(() => {
      this.displayMoles();
      if (++x === 15) {
        window.clearInterval(intervalID);
        this.clearMoles();
        this.setState({ gameHasStarted: false });
      }
    }, 800);
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
    var activeMole = Math.ceil(Math.random() * 9);
    if (this.state.lastMole[0] === activeMole){
      this.displayMoles();
      return;
    }
    this.clearMoles()
    this.setState({
      [activeMole]: 'translate(0, 10%)',
      lastMole: [activeMole]
    });
  }

  lockOutClick(){
    window.setTimeout(() => {
      this.setState({ moleHasBeenWhacked: false })
    }, 800)
  }

  addToScore(){
    if (this.state.moleHasBeenWhacked){ return; }
    this.lockOutClick();
    this.setState({
      moleHasBeenWhacked: true,
      score: [parseInt(this.state.score, 10) + 1]
    });
  }

  shakeScreen(){
    console.log('shake');
  }

  render() {
    return (
      <div className="main-container">
        <div className="game">
          <h1 className="game__title">WHACK-A-MOLE</h1>
          <button className="game__start-button" type="button" onClick={ this.startGame.bind(this) }>
            Start Game!</button>
          <div className="game__score">
            <h1>Score: {this.state.score}</h1>
          </div>
          <div className="game__hole">
            <div className={"game__mole mole-1"} onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['1']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-2" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['2']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-3" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['3']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-4" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['4']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-5" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['5']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-6" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['6']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-7" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['7']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-8" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['8']}}></div>
          </div>
          <div className="game__hole">
            <div className="game__mole mole-9" onClick={ this.addToScore.bind(this) }
              style={{transform: this.state['9']}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
