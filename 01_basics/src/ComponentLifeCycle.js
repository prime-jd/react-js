import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.reset !== state.reset) {
      return { count: 0, reset: props.reset };
    }
    return null;
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { scrollPosition: window.scrollY };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
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
