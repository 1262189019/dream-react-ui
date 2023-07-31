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
        type: 'primary',
        disabled: true,
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'success',
        disabled: true,
      },
      '\u6210\u529F\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'danger',
        disabled: true,
      },
      '\u5371\u9669\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'warning',
        disabled: true,
      },
      '\u8B66\u544A\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'info',
        disabled: true,
      },
      '\u4FE1\u606F\u6309\u94AE',
    ),
  );
}
