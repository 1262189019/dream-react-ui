import React, { useMemo, memo } from 'react';
import './Input.module.less';
var Input = /*#__PURE__*/ memo(function (props) {
  var type = props.type,
    size = props.size,
    disabled = props.disabled,
    placeholder = props.placeholder,
    value = props.value,
    onChange = props.onChange,
    status = props.status,
    inputBotton = props.inputBotton,
    inputColor = props.inputColor,
    rows = props.rows;
  var inputType = useMemo(
    function () {
      if (!type && type !== 'sumbit') {
        return 'text';
      }
      return type;
    },
    [type],
  );
  var style = useMemo(
    function () {
      return getSizeStyle(size, status);
    },
    [size, status],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'input',
    },
    /*#__PURE__*/ React.createElement('span', null, props.children),
    inputType === 'textarea'
      ? /*#__PURE__*/ React.createElement('textarea', {
          className: disabled ? 'disabled' : 'input-react',
          style: style,
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          disabled: disabled,
          rows: rows,
        })
      : /*#__PURE__*/ React.createElement('input', {
          className: disabled ? 'disabled' : 'input-react',
          style: style,
          type: inputType,
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          disabled: disabled,
        }),
  );
});
var getSizeStyle = function getSizeStyle(size, status) {
  var sizes = {
    small: '150px',
    medium: '200px',
    large: '250px',
  };
  var statuses = {
    error: 'red',
    warning: 'yellow',
  };
  var defaultSize = sizes.medium;
  var defaultColor = 'white'; // 默认背景颜色

  // 根据状态设置背景颜色
  var backgroundColor = status ? statuses[status] || defaultColor : defaultColor;
  var widthsize = size ? sizes[size] || defaultSize : defaultSize;
  return {
    width: widthsize,
    backgroundColor: backgroundColor,
  };
};
export default Input;
