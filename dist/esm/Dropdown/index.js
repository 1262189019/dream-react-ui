function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
import React, { useState } from 'react';
import style from './dropdown.less';
var Dropdown = function Dropdown(_ref) {
  var type = _ref.type,
    size = _ref.size,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
    option = _ref.option,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '下拉菜单' : _ref$value;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1]; // 添加状态控制菜单的显示和隐藏

  var options = [
    {
      value: 'option1',
      label: 'Option',
    },
    {
      value: 'option2',
      label: 'Option',
    },
    {
      value: 'option3',
      label: 'Option',
    },
  ];
  if (size === 'small') {
    size = '12px';
  } else if (size === 'medium') {
    size = '16px';
  } else if (size === 'large') {
    size = '22px';
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: style.dropdown,
        onMouseEnter:
          trigger == 'hover'
            ? function () {
                return setIsMenuOpen(true);
              }
            : undefined, // 鼠标移入时设置菜单显示
        onMouseLeave:
          trigger == 'hover'
            ? function () {
                return setIsMenuOpen(false);
              }
            : undefined, // 鼠标移出时设置菜单隐藏
        onClick:
          trigger == 'click'
            ? function () {
                return setIsMenuOpen(!isMenuOpen);
              }
            : undefined, // 点击时切换菜单显示状态
      },
      type === 'button'
        ? /*#__PURE__*/ React.createElement(
            'button',
            {
              className: style.btn,
            },
            value,
          )
        : /*#__PURE__*/ React.createElement('span', null, value),
      isMenuOpen &&
        /*#__PURE__*/
        // 根据菜单显示状态决定是否渲染ul
        React.createElement(
          'ul',
          {
            className: style.menu,
            style:
              type == 'button'
                ? {
                    top: '34px',
                  }
                : undefined,
          },
          options.map(function (option) {
            return /*#__PURE__*/ React.createElement(
              'li',
              {
                key: option.value,
                className: style.item,
                style: {
                  display: 'block',
                  fontSize: size,
                },
              },
              option.label,
            );
          }),
        ),
    ),
  );
};
export default Dropdown;
