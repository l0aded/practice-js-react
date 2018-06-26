import React from 'react';
import ReactDOM from 'react-dom';
//css
require('./css/index.css');

type Props = {||};

class Index extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			hour: 0,
			minute: 0,
			second: 0,
		};
		this.setDegrees = this.setDegrees.bind(this);
	}
	componentDidMount() {
		setInterval(this.setDegrees, 1000);
	}

	setDegrees() {
		const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const secondDegrees = (second/60)*(360) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    const minuteDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;

		this.setState({
			hour: hourDegrees,
			minute: minuteDegrees,
			second: secondDegrees,
		});
	}

	render() {
		var seconds = this.state.second;
		var hours = this.state.hour;
		var minutes = this.state.minute;

		const rotateSeconds = {
			transform: `rotate(${seconds}deg)`,
		};
		const rotateHours = {
			transform: `rotate(${hours}deg)`,
		};
		const rotateMinutes = {
			transform: `rotate(${minutes}deg)`,
		};


		return (
			<div className="body">
				<div className="clock">
					<div className="clock-face">
						<div className="hand hour-hand" style={rotateHours}></div>
						<div className="hand min-hand" style={rotateMinutes}></div>
						<div className="hand second-hand" style={rotateSeconds}></div>
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
