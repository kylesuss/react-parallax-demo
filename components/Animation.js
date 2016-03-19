import React, { Component } from 'react';

export default class Animation extends Component {
  render() {
    const backgroundStyle = {
      transform: `translate3d(0,${ this.props.scrollLevel / 10 }px,0)`
    };

    return (
      <div className='animation relative overflow-hidden flex
                      flex-align-center flex-justify-center'>
        <p className='font-primary text-white text-bold'>Some text yo</p>
        <div className='animation--background absolute'
             style={ backgroundStyle } />
      </div>
    );
  }
}
