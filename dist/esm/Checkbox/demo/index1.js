import React from 'react';
import Checkbox from '../CheckboxAll';
export default function index1() {
  var onChange = function onChange(e, checked) {
    console.log(e);
    console.log(checked);
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      Checkbox,
      {
        defaultChecked: true,
        disabled: false,
        onChange: onChange,
      },
      '\u591A\u9009\u6846',
    ),
  );
}
