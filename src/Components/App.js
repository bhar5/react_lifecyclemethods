import React from 'react';
import '../App.css';
import Header from './Header';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Sunil',
      value: 0,
      age: 25
    }
    console.log(">>> Inside Contructor")
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(">>> Inside getDerivedStateFromProps")
    if (prevState.value === 0) {
      return {
        name: 'React Course',
        value: 0
      }
    }
    return null;
  }

  componentDidMount() {
    // API Calls to fetch server response
    console.log(">>> Inside DidMount")
  }

  shouldComponentUpdate(prevState) {
    console.log(">>> Inside shouldComponentUpdate")
    if (prevState.value === this.state.value) {
      return false;
    }
    return true;
  }

  Increment = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });

  }

  Decrement = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  }

  render() {
    console.log(">>> Inside Render")
    const { value, name, age } = this.state;
    return (
      <div>
        <Header name={name} age={age} />
        {`Value = ${value}`}
        <br />
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;
