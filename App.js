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
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val +1})
  }
  componentWillMount() {
    console.log('mounting')
  }
  render() {
    console.log('rendering!')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount() {
    console.log('mounted')
  }
  componentWillUnmount() {
    console.log('bye!')
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<Third />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('third')
);











