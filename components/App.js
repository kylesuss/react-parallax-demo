import React, { Component } from 'react';
import Animation from './Animation';
import listenToScroll from '../hocs/listenToScroll';

class Application extends Component {
  render() {
    return (
      <Animation scrollLevel={ this.props.scrollLevel } />
    );
  }
}

export default listenToScroll(Application);
