An interactive, customizable, SVG-based dipswitch component for react. 

<img src="https://i.imgur.com/aZrFGGz.png"/>

[Live Demo](https://codesandbox.io/s/84q35m2430)

## Props

The component takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `switchCount`     | _number_   | The number of switches available on the dipswitch |
| `value`           | _number_   | The integer value of the dipswitch. The dipswitch will display this value in binary. |
| `width`           | _number_   | Width of the dipswitch housing. The height will be scaled automatically based on this value |
| `msb`             | _string_   | If `left`, the most significant bit will be on the left side of the dipswitch. If `right` (default), it will display on the right side. |
| `onValueChange`   | _function_ | Callback function to invoke when the value of the switch has changed. Function signature is `function(value){}`. |
| `onSwitchClick`   | _function_ | Callback function to invoke when a switch has been clicked. Function signature is `function(index){}` The index of the least significant bit is always 0. |
| `switchColor`     | _string_   | Color of the switch. |
| `channelColor`    | _string_   | Color of the channel that the switch sits in. |
| `bodyColor`       | _string_   | Color of the switch dipswitch housing. |
| `labelColor`      | _string_   | Color of the number labels. |

## Installation

```bash
npm install react-dipswitch
```

## Usage

### Basic Example
```javascript
    <Dipswitch switchCount={4} value={16}/>
```

### Controlled Example
```javascript
    import React, { Component } from 'react';
    import Dipswitch from 'react-dipswitch';
    
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
```

## TO DO
* Allow for switches to be inverted for cases where "on" is down. 
* Allow for for height to be set instead of width or width+height for custom scaling. 
* Allow for value to be supplied as an array of truthy/falsy values
* Allow for value to be output as an array of true/false

## License

MIT