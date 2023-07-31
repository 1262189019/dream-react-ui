import React from 'react';
import Radio from '../Radio';
export default function index5() {
  var radio = 'radio7';
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
        value: radio,
        label: 13,
        border: true,
        size: 'medium',
      },
      '\u5907\u9009\u9879',
    ),
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        defaultValue: 16,
        value: radio,
        label: 16,
        border: true,
        size: 'small',
      },
      '\u5907\u9009\u9879',
    ),
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        value: radio,
        label: 19,
        border: true,
        size: 'mini',
      },
      '\u5907\u9009\u9879',
    ),
  );
}
