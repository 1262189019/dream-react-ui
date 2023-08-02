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
      type: 'password',
      placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
    }),
  );
}
