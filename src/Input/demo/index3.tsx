import React from 'react';
import Input from '../index';

export default function InputDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Input size="small" placeholder="small"></Input>

      <Input size="medium" placeholder="medium"></Input>

      <Input size="large" placeholder="large"></Input>
    </div>
  );
}
