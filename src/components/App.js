import React, { Component } from 'react';
import '../App.css';
import anime from 'animejs';

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
      shake: 'translate(0, 0)',
      gameHasStarted: false,
      moleHasBeenWhacked: false,
      score: 0,
      lastMole: '',
      display: 'none',
      buttonMessage: 'Start Game',
      gameOver: 'none',
      buttonDisplay: 'inline-block',
      titleMargin: '15px'
    };
  }

  animate(el){
    anime({
      targets: el,
      direction: 'alternate',
      loop: true,
      easing: 'easeInQuad',
      duration: 1600,
      scale: function(el, i, l) {
        return (l - i) + .08;
      },
    });
  }

  timeOut(num){
    if (this.state.gameHasStarted){return};
    this.setState({
      buttonDisplay: 'none',
      display: 'block',
      gameOver: 'none',
      titleMargin: 0
    });
    this.shakeScreen();
    window.setTimeout(() => {
      this.startGame();
    }, num);
  }

  startGame(){
    if ( this.state.gameHasStarted){ return; }

    this.setState({
      gameHasStarted: true,
      score: 0
    });

    var x = 0;
    var intervalID = setInterval(() => {
      this.displayMoles();
      if (++x === 16) {
        window.clearInterval(intervalID);
        this.clearMoles();
        this.setState({ gameHasStarted: false });
      window.setTimeout(() => {
        this.setState({
          display: 'none',
          gameOver: 'block',
          buttonMessage: 'Play again',
          buttonDisplay: 'inline-block',
          titleMargin: '15px'
        });
        this.animate(this.refs.gameOver);
      }, 850)
      }
    }, 700);
  }

  clearMoles(){
    for(let value in this.state){
      if (!isNaN(value)){
        this.setState({
          [value]: 'translate(0, 110%)'
        });
      }
    }
  }

  displayMoles(){
    let activeMole = Math.ceil(Math.random() * 9);
    if (this.state.lastMole[0] === activeMole){
      this.displayMoles();
      return;
    }
    this.clearMoles();
    this.setState({
      [activeMole]: 'translate(0, 15%)',
      lastMole: [activeMole]
    });
  }

  lockOutClick(){
    window.setTimeout(() => {
      this.setState({ moleHasBeenWhacked: false })
    }, 350)
  }

  addToScore(e){
    if (this.state.moleHasBeenWhacked){ return; }
    let target = e.target;
    target.parentNode.classList.add('game__cross');
    target.classList.add('no-background');
    this.lockOutClick();
    this.setState({
      background: '75px',
      moleHasBeenWhacked: true,
      score: [parseInt(this.state.score, 10) + 1]
    });
    window.setTimeout(function(){
      target.parentNode.classList.remove('game__cross');
      target.classList.remove('no-background');
    }, 500)
  }

  shakeScreen(){
    let posOrNeg = '+';
    let i = 0;
    let shake = () => {
      if (i === 15){
        this.setState({ shake: 'translate(0, 0)' });
        return;
      }
      window.setTimeout(() => {
        posOrNeg = posOrNeg === '-' ? '+' : '-';
        this.setState({ shake: `translate(${posOrNeg}${i}px, 0)` });
        shake();
      }, 80);
      i++
    };
    shake();
  }

  render() {
    return (
      <div className="main-container">
        <div className="game" style={{WebkitTransform: this.state['shake']}}>
          <h1 className="game__title" style={{ margin: this.state.titleMargin }}>WHACK-A-MOLE</h1>
          <div className="game__game-over" style={{ display: this.state.gameOver }}>
            <h1 className="game__game-over-header" >GAME OVER!</h1>
            <p className="game__you-scored">You scored {this.state.score}/15</p>
          </div>
          <div ref={ 'gameOver' } className="game__button-container">
            <button className="game__start-button" type="button"
              onClick={ this.timeOut.bind(this, 800) } style={{ display: this.state.buttonDisplay }}>
              {this.state.buttonMessage}
            </button>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['1']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['2']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['3']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['4']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['5']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['6']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['7']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['8']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__hole" style={{ display: this.state.display }}>
            <div className="game__whack">
              <div className={"game__mole"} onClick={ this.addToScore.bind(this) }
                style={{WebkitTransform: this.state['9']}}>
              </div>
              <div className="game__mound"></div>
            </div>
          </div>
          <div className="game__score" style={{ display: this.state.display }}>
            <h1>SCORE: {this.state.score}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
