import React from 'react';
import InputNumber from '../index';
export default function InputNumberDemo1() {
  var blur = function blur(value) {
    console.log(value);
  };
  var focus = function focus(value) {
    console.log(value);
  };
  var change = function change(value) {
    console.log(value);
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
        userSelect: 'none',
      },
    },
    /*#__PURE__*/ React.createElement(InputNumber, {
      max: 10,
      value: 1,
      min: 0,
      blur: blur,
      focus: focus,
      change: change,
    }),
  );
}
