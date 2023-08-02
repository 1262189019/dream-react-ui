import React from 'react';
import Input from '../index';

export default function InputDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Input type="password" placeholder="请输入密码"></Input>
    </div>
  );
}
