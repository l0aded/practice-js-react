/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
//css
require('./css/index.css');

type Props = {||};

class Index extends React.Component<Props> {
	constructor(props) {
		super(props)
		this.state = {

		};
	}

	render() {
		return (
			<div>
				<h2>Update CSS Variables with <span class='hl'>JS</span></h2>
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
