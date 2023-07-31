import React from 'react';
import Link from '../index';
export default function LinkDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    /*#__PURE__*/ React.createElement(
      Link,
      {
        underline: true,
      },
      '\u6709\u4E0B\u5212\u7EBF',
    ),
    /*#__PURE__*/ React.createElement(
      Link,
      {
        underline: false,
      },
      '\u65E0\u4E0B\u5212\u7EBF',
    ),
  );
}
