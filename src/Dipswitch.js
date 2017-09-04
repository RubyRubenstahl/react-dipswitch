import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      const s = (<Switch
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

const Switch = (props) => {
  const { on = false,
    label = "1",
    width = 12,
    onClick,
    switchColor = '#FFF',
    channelColor = '#222',
    bodyColor = '#3768b2',
    labelColor = '#FFF'
  } = props;

  const height = width * 4;
  const fontSize = width / 1.1;
  const switchPosition = on ? '24%' : '50%';

  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} onClick={onClick}>
        <rect width="100%" height="100%" fill={bodyColor} />
        <rect width="66%" height="40%" x="16%" y="24%" fill={channelColor} />
        <rect width="66%" height="16%" x="17%" y={switchPosition} fill={switchColor} />
        <text x="50%" y="92%" fontSize={fontSize} fill={labelColor} textAnchor="middle">{label}</text>
      </svg>
  )
};


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