import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { count: 0 };
    console.log("constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
    if (props.reset !== state.reset) {
      return { count: 0, reset: props.reset };
    }
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount")
    console.log('Component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    return nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotsBeforeUpdate")
    return { scrollPosition: window.scrollY };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate")
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
