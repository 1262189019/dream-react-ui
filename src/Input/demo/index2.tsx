import React from 'react';
import Input from '../index';

export default function InputDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
     <Input  status="error" placeholder='error status' />
      <Input status='warning' placeholder='warning status' />
      <Input disabled placeholder='disabled input' />
    </div>
  );
}
