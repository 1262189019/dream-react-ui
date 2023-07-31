import React from 'react';
import Radio from '../Radio';
export default function index1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
      },
    },
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        defaultValue: '1',
        value: 'radio',
        label: 1,
      },
      '\u5907\u9009\u9879',
    ),
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        value: 'radio',
        label: 2,
      },
      '\u5907\u9009\u9879',
    ),
  );
}
