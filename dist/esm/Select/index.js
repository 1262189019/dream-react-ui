import React from 'react';
import './Select.module.less';
// import SelectProps from './interface'

var Select = function Select(_ref) {
  var options = _ref.options,
    onChange = _ref.onChange,
    disabled = _ref.disabled;
  var handleChange = function handleChange(event) {
    var selectedValue = event.target.value;
    onChange(selectedValue);
  };
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(
        'select',
        {
          onChange: handleChange,
          className: 'Select',
          style: {
            cursor: disabled ? 'not-allowed' : 'pointer',
          },
          disabled: disabled ? true : false,
        },
        options.map(function (option) {
          return /*#__PURE__*/ React.createElement(
            'option',
            {
              key: option.value,
              className: 'SelectOption',
            },
            option.label,
          );
        }),
      ),
    ),
  );
};
export default Select;
