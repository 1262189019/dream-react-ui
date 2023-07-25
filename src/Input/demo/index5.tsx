import React from 'react';
import Input from '../index';

export default function InputDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Input  type="textarea" rows={3} placeholder="请输入内容">
          
      </Input>
    </div>
  );
}
