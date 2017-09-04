An interactive, customizable, SVG-based dipswitch component for react. 


## Props

The component takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `switchCount`     | _number_   | The number of switches available on the dipswitch |
| `value`           | _number_   | The integer value of the dipswitch. The dipswitch will display this value in binary. |
| `width`           | _number_   | Width of the dipswitch housing. The height will be scaled automatically based on this value |
| `msb`             | _string_   | If `left` (default) the most significant bit will be on the left side of the dipswitch, if `right`, it will display on the right side. |
| `onValueChange`   | _funciton_ | Callback function to invoke when the value of the switch has changed. Function signature is `function(value){}`. |
| `onSwitchClick`   | _funciton_ | Callback function to invoke when a switch has been clicked. Function signature is `function(index){}` The index of the least significant bit is always 0. |
| `switchColor`     | _string_   | Color of the switch. |
| `channelColor`    | _string_   | Color of the channel that the switch sits in. |
| `bodyColor`       | _string_   | Color of the switch dipswitch housing. |
| `labelColor`      | _string_   | Color of the number labels. |

## Installation

```bash
npm install react-dipswitch
```

## Usage

If you want the default styling, include the component's [CSS](./style.css) with

```javascript
import "react-toggle/style.css" // for ES6 modules
// or
require("react-toggle/style.css") // for CommonJS
```

## Development

```javascript
npm install
npm run dev
```

## Build

```javascript
npm run build
```

## License

MIT