import React from 'react';
import Button from '../index';
export default function ButtonDemo3() {
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
        handleClick: function handleClick() {
          alert('点击了');
        },
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
  );
}
