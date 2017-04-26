import React, { Component } from 'react';

class Score extends Component {

  render(){
    return (
      <div className="game__score" style={{ display: this.props.context.state.display }}>
        <h1>SCORE: {this.props.context.state.score}</h1>
      </div>
    )
  };
}

export default Score;
