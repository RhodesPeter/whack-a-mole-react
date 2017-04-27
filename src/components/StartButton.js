import React, { Component } from 'react';

class Score extends Component {

  render(){
    return (
      <button className="game__start-button" type="button"
        onClick={ this.props.onClick } style={{ display: this.props.context.buttonDisplay }}>
        {this.props.context.buttonMessage}
      </button>
    )
  };
}

export default Score;
