# Whack-A-Mole Game
You can whack a mole [here](https://whack-a-mole-react.herokuapp.com/).

<img src="https://github.com/RhodesPeter/whack-a-mole-react/blob/master/public/assets/illustration-for-readme.png" width="320">

Built in React.<br>
Animation with [Anime.js](http://anime-js.com/).<br>
Illustration designed in Adobe Illustrator.<br>
Created with the [create-react-app](https://www.npmjs.com/package/create-react-app) npm module. <br>
Hosted on Heroku.<br>

### Key learnings:

Calling functions in a component from a different component by passing onClick() in the props:<br>
(I am not 100% sure yet that this is best practice)<br>

#### App.js:<br>
The timeOut function is defined in App.js.
```
<StartButton context={ this.state } onClick={ this.timeOut.bind(this) }/>
```

#### StartButton.js:<br>
The timeOut function in App.js is called via the onClick on the component in StartButton.js
```
render(){
  return (
    <button className="game__start-button" type="button"
      onClick={ this.props.onClick } style={{ display: this.props.context.buttonDisplay }}>
      { this.props.context.buttonMessage }
    </button>
  )
};
```
