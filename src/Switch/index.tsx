import React, { useState } from 'react';
import './demo/Switch.css';

function Switch(props?: any) {
  const [isOn, setIsOn] = useState(props.isOn || false);

  const handleClick = () => {
    setIsOn(!isOn);
    if (props.onClick) {
      props.onClick(!isOn);
    }
  };

  return (
    <div className="switch" onClick={handleClick}>
      <div className={`switch-toggle ${isOn ? 'on' : 'off'}`} />
    </div>
  );
}

export default Switch;
