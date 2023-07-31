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
        value: 'radio1',
        label: '禁用',
        disabled: true,
      },
      '\u7981\u7528',
    ),
  );
}
