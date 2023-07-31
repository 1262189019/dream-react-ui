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
        messageTitle: '自定义标题',
        messageMain: '自定义内容',
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
