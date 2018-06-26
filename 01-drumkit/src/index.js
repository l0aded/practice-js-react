
import React from 'react';
import ReactDOM from 'react-dom';
//css
require('./css/index.css');

type Props = {||};

class Index extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			playing: false,
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
				var audio = null;
	      break;
	  }
		this.setState({
			playing: key
		})
		setTimeout(this.removeTransition.bind(this), 1500)
		if (!!audio) {
			audio.play();
		}
	}

	removeTransition() {
		this.setState({
			playing: false
		})
	}

	render() {
		return (
			<div>
				<div className="keys">
					<div className={"key" + (this.state.playing === 65 ? " playing" : '')}>
			      <kbd>A</kbd>
			      <span className="sound" >clap!</span>
			    </div>
			    <div className={"key" + (this.state.playing === 83 ? " playing" : '')}>
			      <kbd>S</kbd>
			      <span className="sound">hihat</span>
			    </div>
			    <div className={"key" + (this.state.playing === 68 ? " playing" : '')}>
			      <kbd>D</kbd>
			      <span className="sound">kick</span>
			    </div>
			    <div className={"key" + (this.state.playing === 70 ? " playing" : '')}>
			      <kbd>F</kbd>
			      <span className="sound">openhat</span>
			    </div>
			    <div className={"key" + (this.state.playing === 71 ? " playing" : '')}>
			      <kbd>G</kbd>
			      <span className="sound">boom</span>
			    </div>
			    <div className={"key" + (this.state.playing === 72 ? " playing" : '')}>
			      <kbd>H</kbd>
			      <span className="sound">ride</span>
			    </div>
			    <div className={"key" + (this.state.playing === 74 ? " playing" : '')}>
			      <kbd>J</kbd>
			      <span className="sound">snare</span>
			    </div>
			    <div className={"key" + (this.state.playing === 75 ? " playing" : '')}>
			      <kbd>K</kbd>
			      <span className="sound">tom</span>
			    </div>
			    <div className={"key" + (this.state.playing === 76 ? " playing" : '')}>
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
