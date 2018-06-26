/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
//css
require('./css/index.css');

type Props = {||};

class Index extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			playing: false
		};
	}

	componentWillMount() {
		document.addEventListener("keydown", this.playSound.bind(this));
	}


	playSound(e) {
	  var key = e.keyCode
	  switch(key) {
	    case 65:
	      var audio = new Audio("sounds/clap.wav");
	      break;
	    case 83:
	      var audio = new Audio("sounds/hihat.wav");
	      break;
	    case 68:
	      var audio = new Audio("sounds/kick.wav");
	      break;
	    case 70:
	      var audio = new Audio("sounds/openhat.wav");
	      break;
	    case 71:
	      var audio = new Audio("sounds/boom.wav");
	      break;
	    case 72:
	      var audio = new Audio("sounds/ride.wav");
	      break;
	    case 74:
	      var audio = new Audio("sounds/snare.wav");
	      break;
	    case 75:
	      var audio = new Audio("sounds/tom.wav");
	      break;
	    case 76:
	      var audio = new Audio("sounds/tink.wav");
	      break;
	    default:
	      break;
	  }
		this.setState({
			playing: key
		})
	  audio.play();

	}


	render() {
		return (
			<div className="main">
				<div className="keys">
			    <div className="key" >
			      <kbd>A</kbd>
			      <span className="sound" className="playing">clap!</span>
			    </div>
			    <div className="key">
			      <kbd>S</kbd>
			      <span className="sound">hihat</span>
			    </div>
			    <div className="key">
			      <kbd>D</kbd>
			      <span className="sound">kick</span>
			    </div>
			    <div className="key">
			      <kbd>F</kbd>
			      <span className="sound">openhat</span>
			    </div>
			    <div className="key">
			      <kbd>G</kbd>
			      <span className="sound">boom</span>
			    </div>
			    <div className="key">
			      <kbd>H</kbd>
			      <span className="sound">ride</span>
			    </div>
			    <div className="key">
			      <kbd>J</kbd>
			      <span className="sound">snare</span>
			    </div>
			    <div className="key">
			      <kbd>K</kbd>
			      <span className="sound">tom</span>
			    </div>
			    <div className="key">
			      <kbd>L</kbd>
			      <span className="sound">tink</span>
			    </div>
			  </div>
			</div>
		)
	}
}

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<Index />, dom);
}
