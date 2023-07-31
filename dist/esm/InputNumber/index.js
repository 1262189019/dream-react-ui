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
import React, { useState, memo } from 'react';
import Css from './index.module.less';
var InputNumber = /*#__PURE__*/ memo(function (_ref) {
  var value = _ref.value,
    min = _ref.min,
    max = _ref.max,
    width = _ref.width,
    height = _ref.height,
    disabled = _ref.disabled,
    change = _ref.change,
    blur = _ref.blur,
    focus = _ref.focus,
    controlsPosition = _ref.controlsPosition;
  var _useState = useState(value ? value : 0),
    _useState2 = _slicedToArray(_useState, 2),
    num = _useState2[0],
    setNum = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    active = _useState4[0],
    setActive = _useState4[1];
  var style = {
    width: '150px',
    height: '45px',
  };
  var position = '';
  if (!max) {
    max = 99999999;
  }
  if (!min) {
    min = 0;
  }
  if (controlsPosition === 'left') {
    position = 'left';
  } else if (controlsPosition === 'rigth') {
    position = 'rigth';
  }
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
  var minus = function minus() {
    if (num <= min) {
      setNum(min);
    } else if (!disabled) {
      setNum(num - 1);
    }
    return change
      ? change({
          value: num,
        })
      : null;
  };
  var add = function add() {
    if (num >= max) {
      setNum(max);
    } else if (!disabled) {
      setNum(num + 1);
    }
    return change
      ? change({
          value: num,
        })
      : null;
  };
  var handleFocus = function handleFocus() {
    setActive(true);
    return focus
      ? focus({
          value: num,
        })
      : null;
  };
  var handleBlur = function handleBlur() {
    setActive(false);
    return blur
      ? blur({
          value: num,
        })
      : null;
  };
  var className = [
    Css['input_number'],
    disabled ? Css['disabled'] : '',
    !disabled ? Css['defaule'] : '',
    position ? Css[position] : '',
    active ? Css['active'] : '',
  ].join(' ');
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: className,
      style: style,
    },
    /*#__PURE__*/ React.createElement('span', {
      className: Css.minus,
      onClick: function onClick() {
        minus();
      },
    }),
    /*#__PURE__*/ React.createElement('input', {
      className: Css.input,
      disabled: disabled,
      type: 'text',
      min: min,
      max: max,
      value: num,
      onBlur: function onBlur() {
        handleBlur();
      },
      onFocus: function onFocus() {
        handleFocus();
      },
    }),
    /*#__PURE__*/ React.createElement('span', {
      className: Css.add,
      onClick: function onClick() {
        add();
      },
    }),
  );
});
export default InputNumber;
