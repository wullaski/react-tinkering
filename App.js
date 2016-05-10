import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render() {
		return (
			<div>
				<Slider ref="red" update={this.update} />
				<p>Red: {this.state.red}</p>
				<br />
				<Slider ref="green" update={this.update} />
				<p>Green: {this.state.green}</p>
				<br />
				<Slider ref="blue" update={this.update} />
				<p>Blue: {this.state.blue}</p>
				<br />
			</div>
		)
	}
}

class Slider extends React.Component {
	render() {
		return (
				<div>
					<input ref="inp" type="range"
						min="0"
						max="255"
						onChange={this.props.update} />
				</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);