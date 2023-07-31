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
        messageMain: /*#__PURE__*/ React.createElement('h1', null, 'html\u6807\u7B7E'),
        useHTMLString: true,
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
