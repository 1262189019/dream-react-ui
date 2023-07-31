import React, { memo } from 'react';
import Css from './index.module.less';
var Input = /*#__PURE__*/ memo(function (_ref) {
  var type = _ref.type,
    width = _ref.width,
    height = _ref.height,
    bordered = _ref.bordered,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    disabled = _ref.disabled,
    inputBorder = _ref.inputBorder,
    handleChange = _ref.handleChange,
    handleBlur = _ref.handleBlur,
    handleFcus = _ref.handleFcus;
  var style = {
    width: '120px',
    height: '34px',
  };
  if (width) {
    if (typeof width === 'string') {
      if (width.includes('%') || width.includes('px')) {
        style.width = width;
      }
    } else if (width * 1) {
      style.width = width + 'px';
    }
  }
  if (height) {
    if (typeof height === 'string') {
      if (height.includes('%') || height.includes('px')) {
        style.height = height;
      }
    } else if (height * 1) {
      style.height = height + 'px';
    }
  }
  var className = [
    !bordered ? Css['bordered'] : '',
    !inputBorder ? Css['inputBorder'] : '',
    disabled ? Css['disabled'] : '',
  ].join(' ');
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['input'],
    },
    /*#__PURE__*/ React.createElement('input', {
      type: type ? type : 'text',
      placeholder: defaultValue ? defaultValue : '请输入内容',
      disabled: disabled,
      className: className,
      style: style,
      value: value ? value : '',
      onChange: function onChange(e) {
        return handleChange
          ? handleChange({
              value: e.currentTarget.value,
            })
          : null;
      },
      onBlur: function onBlur(e) {
        handleBlur
          ? handleBlur({
              value: e.currentTarget.value,
            })
          : null;
      },
      onFocus: function onFocus(e) {
        handleFcus
          ? handleFcus({
              value: e.currentTarget.value,
            })
          : null;
      },
    }),
  );
});
export default Input;
