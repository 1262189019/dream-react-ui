import React from 'react';
import Button from '../index';
export default function ButtonDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'text',
      },
      '\u6587\u672C\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'text',
      },
      '\u6587\u672C\u6309\u94AE',
    ),
  );
}
