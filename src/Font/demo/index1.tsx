import React from 'react';
import Font from '../index';

export default function FontDemo1() {
  return (
    <div>
      <Font variant="songti" fontSize={50} color="red">
        我是那可焦桑
      </Font>
      <Font variant="kaiti" fontSize={50} color="red">
        我是那可焦桑
      </Font>
      <Font fontSize={50} color="red">
        我是那可焦桑
      </Font>
    </div>
  );
}