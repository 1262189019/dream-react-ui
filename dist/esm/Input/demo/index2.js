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
      status: 'error',
      placeholder: 'error status',
    }),
    /*#__PURE__*/ React.createElement(Input, {
      status: 'warning',
      placeholder: 'warning status',
    }),
    /*#__PURE__*/ React.createElement(Input, {
      disabled: true,
      placeholder: 'disabled input',
    }),
  );
}
