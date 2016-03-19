import React, { Component } from 'react';

const listenToScroll = (PassThroughComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.boundHandleScroll = this.handleScroll.bind(this);
    this.state = { scrollLevel: document.body.scrollTop };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.boundHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.boundHandleScroll);
    cancelAnimationFrame(this.scrollStateCallback);
  }

  handleScroll(event) {
    this.scrollStateCallback = requestAnimationFrame(() => {
      this.setState({ scrollLevel: document.body.scrollTop });
    });
  }

  render() {
    return (
      <PassThroughComponent {...this.props} {...this.state} />
    );
  }
}

export default listenToScroll;
