import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "./Switch";

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
      if (onClick) {
        this.props.onClick(index);
      }
    };
  }

  onValueChange(index) {
    const { onValueChange, value } = this.props;
    if (onValueChange) {
      const newVal = value ^ Math.pow(2, index);
      onValueChange(newVal);
    }
  }

  // Used to determine the order of the switches
  msbRightIterator(count, fn) {
    for (let i = 0; i < count; i++) {
      fn(i);
    }
  }

  msbLeftIterator(count, fn) {
    for (let i = count - 1; i >= 0; i--) {
      fn(i);
    }
  }

  toBool(val) {
    return !!val;
  }

  render() {
    let switches = [];
    const {
      switchCount = 8,
      value = 0,
      mostSignificantBit = "right",
      width = 128,
      switchColor,
      channelColor,
      bodyColor,
      labelColor
    } = this.props;

    const iterator =
      mostSignificantBit.toLowerCase() === "right"
        ? this.msbRightIterator
        : this.msbLeftIterator;
    const switchWidth = width / switchCount;

    iterator(switchCount, i => {
      const switchState = this.toBool(Math.pow(2, i) & value);
      const singleSwitch = (
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
        />
      );
      switches.push(singleSwitch);
    });

    return <div>{switches}</div>;
  }
}

Dipswitch.PropTypes = {
  switchCount: PropTypes.number.isRequired,
  value: PropTypes.number,
  width: PropTypes.number,
  mostSignificantBit: PropTypes.oneOf(["left", "right"]),
  onValueChange: PropTypes.func,
  onSwitchClick: PropTypes.func,
  switchColor: PropTypes.string,
  channelColor: PropTypes.string,
  bodyColor: PropTypes.string,
  labelColor: PropTypes.string
};

export default Dipswitch;
