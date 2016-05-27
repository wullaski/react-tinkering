import React from 'react';
import ReactDOM from 'react-dom';
class First extends React.Component {
  constructor(){
    super();
    this.state = { 
      red: 0,
      green: 0,
      blue: 0,
      name: ''
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.sli).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.sli).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.sli).value,
      name: ReactDOM.findDOMNode(this.refs.name.refs.txt).value
    })
  }
  render() {
    return (
      <div>
        <div>
          <Slider ref="red" update={this.update} />
          <p>Red: {this.state.red}</p>
          <br />
          <Slider ref="green" update={this.update} />
          <p>Green: {this.state.green}</p>
          <br />
          <Slider ref="blue" update={this.update} />
          <p>Blue: {this.state.blue}</p>
        </div>
        <div>
          <Input ref="name" update={this.update} />
          <h1>Name: {this.state.name}</h1>
        </div>
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="sli" type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <div>
        <input ref="txt" type="text" onChange={this.props.update} />
      </div>
    );
  }
}

ReactDOM.render(
  <First />,
  document.getElementById('first')
);



// ============================================================================

class Second extends React.Component {
  render() {
    return (
      <div>
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

ReactDOM.render(
  <Second />,
  document.getElementById('second')
);



// ============================================================================

class Third extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false}
  }
  update() {
    ReactDOM.render(
      <Third val={this.props.val+1} />,
      document.getElementById('third')
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    console.log(this.state.increasing)
    return <button onClick={this.update}>{this.props.val}</button>
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
  }
}

Third.defaultProps = { val: 0 }

ReactDOM.render(
  <Third />,
  document.getElementById('third')
);











