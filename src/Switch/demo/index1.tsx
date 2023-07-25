import React from 'react';
// import Switch from './Switch.css';
import Switch from '..';

const App: React.FC = () => {
  const handleClick = (isOn: boolean) => {
    console.log(`Switch is ${isOn ? 'on' : 'off'}`);
  };

  return (
    <div>
      <h1>Switch Example</h1>
      <Switch isOn onClick={handleClick} />
    </div>
  );
};

export default App;
