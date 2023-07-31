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
import React, { useEffect, useRef, useState, memo } from 'react';
import Css from './index.module.less';
var Switch = /*#__PURE__*/ memo(function (_ref) {
  var width = _ref.width,
    height = _ref.height,
    disabled = _ref.disabled,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? false : _ref$value,
    handleClick = _ref.handleClick;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    flag = _useState2[0],
    setFlag = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    left = _useState4[0],
    setLeft = _useState4[1];
  var switchRef = useRef(null);
  var handle = function handle() {
    if (!disabled) {
      setFlag(!flag);
      var state = {
        value: !flag,
      };
      if (handleClick) {
        return handleClick(state);
      }
    }
  };
  var switchStyle = {
    width: '75px',
    height: '35px',
    borderRadius: '35px',
  };
  if (width) {
    if (typeof width === 'string') {
      if (width.includes('%') || width.includes('px')) {
        switchStyle.width = width;
      }
    } else if (width * 1) {
      switchStyle.width = width + 'px';
    }
  }
  if (height) {
    if (typeof height === 'string') {
      if (height.includes('%') || height.includes('px')) {
        switchStyle.height = height;
        switchStyle.borderRadius = parseInt(height) + 'px';
      }
    } else if (height * 1) {
      switchStyle.height = height + 'px';
      switchStyle.borderRadius = height + 'px';
    }
  }
  useEffect(function () {
    setLeft(switchRef.current.clientWidth - parseInt(switchStyle.height) + 'px');
  }, []);
  var className = [
    Css['switch'],
    flag ? Css['action'] : '',
    disabled && !flag ? Css['disabled1'] : '',
    disabled && flag ? Css['disabled2'] : '',
  ].join(' ');
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: className,
      style: switchStyle,
      ref: switchRef,
      onClick: function onClick() {
        handle();
      },
    },
    /*#__PURE__*/ React.createElement('span', {
      style: {
        left: flag ? left : '2px',
        width: parseInt(switchStyle.height) - 4 + 'px',
        height: parseInt(switchStyle.height) - 4 + 'px',
      },
    }),
  );
});
export default Switch;
