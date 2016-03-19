import React, { Component } from 'react';
import Animation from './Animation';
import listenToScroll from '../hocs/listenToScroll';

class Application extends Component {
  render() {
    return (
      <div>
        <Animation scrollLevel={ this.props.scrollLevel } />
        <Animation scrollLevel={ this.props.scrollLevel } />
      </div>
    );
  }
}

export default listenToScroll(Application);
