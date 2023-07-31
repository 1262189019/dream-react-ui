import React from 'react';
import Radio from '../Radio';
export default function index3() {
  var radio = 'radio2';
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        defaultValue: 3,
        value: radio,
        label: 3,
      },
      '\u5907\u9009\u9879',
    ),
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        value: radio,
        label: 6,
      },
      '\u5907\u9009\u9879',
    ),
    /*#__PURE__*/ React.createElement(
      Radio,
      {
        value: radio,
        label: 9,
      },
      '\u5907\u9009\u9879',
    ),
  );
}
