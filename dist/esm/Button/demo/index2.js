import React from 'react';
import Button from '../index';
export default function ButtonDemo2() {
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
        width: 100,
        height: 50,
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'success',
        width: 130,
        height: 60,
      },
      '\u6210\u529F\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'danger',
        width: 150,
        height: 65,
      },
      '\u5371\u9669\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'warning',
        width: 180,
        height: 70,
      },
      '\u8B66\u544A\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'info',
        width: 200,
        height: 75,
      },
      '\u4FE1\u606F\u6309\u94AE',
    ),
  );
}
