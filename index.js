import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getScrollLevel from './utils/get-scroll-level';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.boundHandleScroll = this.handleScroll.bind(this);
    this.state = { scrollLevel: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.boundHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.boundHandleScroll);
  }

  handleScroll(event) {
    this.setState({ scrollLevel: getScrollLevel() });
  }

  render() {
    return(
      <img src={'https://unsplash.it/1280/1920/?random'} />
    );
  }
}

ReactDOM.render(<Animation />, document.getElementById('root'));
