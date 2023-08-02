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
      size: 'small',
      placeholder: 'small',
    }),
    /*#__PURE__*/ React.createElement(Input, {
      size: 'medium',
      placeholder: 'medium',
    }),
    /*#__PURE__*/ React.createElement(Input, {
      size: 'large',
      placeholder: 'large',
    }),
  );
}
