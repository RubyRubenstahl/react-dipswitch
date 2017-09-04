import React from 'react';


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

export default Switch;