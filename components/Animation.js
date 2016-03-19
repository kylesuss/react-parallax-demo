import React, { Component } from 'react';

const TOTAL_Y_TRANSLATE = 100;

let INSTANCE_ID = 0;

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
      offsetTop: 0,
      offsetBottom: 0
    };
  }

  componentWillMount() {
    INSTANCE_ID += 1; // Unique id for each instance
    this.setState({ instanceId: INSTANCE_ID });
  }

  componentDidMount() {
    const el = document.querySelector(`.animation-${this.state.instanceId}`);
    const clientRect = el.getBoundingClientRect();
    const offsetTop = clientRect.top + document.body.scrollTop;

    this.setState({
      el: el,
      offsetTop: offsetTop,
      offsetBottom: offsetTop + clientRect.height
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      translateY: this.getTranslateY(nextProps.scrollLevel)
    });
  }

  getTranslateY(scrollLevel=this.props.scrollLevel) {
    const { offsetTop, offsetBottom } = this.state;

    if (this.isInViewport(scrollLevel)) {
      const scrolledPx = scrollLevel + window.innerHeight - offsetTop;
      const totalScroll = offsetBottom - offsetTop + window.innerHeight;
      const percentageScrolled = scrolledPx / totalScroll;

      return percentageScrolled * TOTAL_Y_TRANSLATE;
    }

    return this.state.translateY;
  }

  isInViewport(scrollLevel) { // Will be nextProps.scrollLevel
    const { offsetTop, offsetBottom } = this.state;
    const visibleOffset = scrollLevel + window.innerHeight;

    return (visibleOffset >= offsetTop) && (scrollLevel <= offsetBottom);
  }

  render() {
    const backgroundStyle = {
      transform: `translate3d(0,${ this.state.translateY }px,0)`
    };

    return (
      <div className={`animation animation-${this.state.instanceId} relative
                       overflow-hidden flex flex-align-center flex-justify-center`}>
        <p className='font-primary text-white text-bold'>Some text yo</p>
        <div className='animation--background absolute'
             style={ backgroundStyle } />
      </div>
    );
  }
}
