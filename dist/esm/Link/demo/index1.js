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
        type: 'text',
      },
      '\u9ED8\u8BA4\u94FE\u63A5',
    ),
    /*#__PURE__*/ React.createElement(
      Link,
      {
        type: 'primary',
      },
      '\u4E3B\u8981\u94FE\u63A5',
    ),
    /*#__PURE__*/ React.createElement(
      Link,
      {
        type: 'success',
      },
      '\u6210\u529F\u94FE\u63A5',
    ),
    /*#__PURE__*/ React.createElement(
      Link,
      {
        type: 'danger',
      },
      '\u5371\u9669\u94FE\u63A5',
    ),
    /*#__PURE__*/ React.createElement(
      Link,
      {
        type: 'warning',
      },
      '\u8B66\u544A\u94FE\u63A5',
    ),
    /*#__PURE__*/ React.createElement(
      Link,
      {
        type: 'info',
      },
      '\u4FE1\u606F\u94FE\u63A5',
    ),
  );
}
