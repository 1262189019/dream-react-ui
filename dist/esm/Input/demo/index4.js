import React from 'react';
import Input from '..';
export default function InputDemo4() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Input, {
      defaultValue: '\u81EA\u5B9A\u4E49\u4E8B\u4EF6',
      handleChange: function handleChange(_ref) {
        var value = _ref.value;
        console.log(value);
      },
    }),
  );
}
