import React from 'react';
import Button from '../../Button';
import MessageBox from '../index';
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
      MessageBox,
      {
        handleSubmit: function handleSubmit() {
          alert('提交');
        },
      },
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'text',
        },
        '\u5F39\u7A97',
      ),
    ),
  );
}
