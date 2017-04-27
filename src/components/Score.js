import React, { Component } from 'react';

class Score extends Component {

  render(){
    return (
      <div className="game__score" style={{ display: this.props.context.display }}>
        <h1>SCORE: {this.props.context.score}</h1>
      </div>
    )
  };
}

export default Score;
