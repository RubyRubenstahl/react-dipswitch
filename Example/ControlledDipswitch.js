import React, { Component } from 'react';
import Dipswitch from '../src/Dipswitch';

class ControlledDipswitch extends Component {
  constructor(props) {
    super();
    this.state={value: 127}
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(value){
    this.setState({value});
  }

  render(){
    return(
        <div>
          <Dipswitch
              switchCount="8"
              value={this.state.value}
              onValueChange={this.onValueChange}
              width="100"
          />
          {this.state.value}
        </div>
    );
  }
}

export default ControlledDipswitch;