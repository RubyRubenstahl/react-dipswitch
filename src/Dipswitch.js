import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

class Dipswitch extends Component {
  constructor(props) {
    super();
    this.onSwitchClick = this.onSwitchClick.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onSwitchClick(index) {
    return () => {
      this.onValueChange(index);
      const { onClick } = this.props;
      if (typeof onClick === 'function') {
        this.props.onClick(index);
      }
    }
  }

  onValueChange(index) {
    const { onValueChange } = this.props;
    if (typeof onValueChange === 'function') {
      const newVal = this.props.value ^ Math.pow(2, index);
      onValueChange(newVal);
    }
  }

  render() {
    let switches = [];
    const { switchCount = 8,
      value = 0,
      msb = 'left',
      width = 128,
      switchColor,
      channelColor,
      bodyColor,
      labelColor
    } = this.props;

    const iterator = msb.toLowerCase() === 'right' ? msbRightIterator : msbLeftIterator;
    const switchWidth = width / switchCount;

    iterator(switchCount, i => {
      const switchState = Math.pow(2, i) & value;
      const s = (
          <Switch
              key={i}
              label={i + 1}
              onClick={this.onSwitchClick(i)}
              on={switchState}
              width={switchWidth}
              switchColor={switchColor}
              channelColor={channelColor}
              bodyColor={bodyColor}
              labelColor={labelColor}
          />);
      switches.push(s);
    })

    return (
        <div>
          {switches}
        </div>);
  }
}

Dipswitch.PropTypes = {
  switchCount: PropTypes.number.isRequired,
  value: PropTypes.number,
  width: PropTypes.number,
  msb: PropTypes.oneOf(['left', 'right']),
  onValueChange: PropTypes.func,
  onSwitchClick: PropTypes.func,
  switchColor: PropTypes.string,
  channelColor: PropTypes.string,
  bodyColor: PropTypes.string,
  labelColor: PropTypes.string,
}


const msbRightIterator = (count, fn) => {
  for (let i = 0; i < count; i++) {
    fn(i);
  }
}

const msbLeftIterator = (count, fn) => {
  for (let i = count - 1; i >= 0; i--) {
    fn(i);
  }
}

export default Dipswitch;