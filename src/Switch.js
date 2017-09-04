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
<div>test</div>
  )
};

export default Switch;