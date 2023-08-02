import React from 'react';
import Input from '../index';
export default function InputDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    /*#__PURE__*/ React.createElement(Input, {
      placeholder: 'Basic usage',
    }),
  );
}
