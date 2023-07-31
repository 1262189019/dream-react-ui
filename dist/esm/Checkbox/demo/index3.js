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
import CheckboxAll from '../CheckboxAll';
import CheckboxGroup from '../CheckboxGroup';
export default function index1() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checkAll = _useState2[0],
    setcheckAll = _useState2[1];
  var _useState3 = useState([
      {
        title: 'Apple',
        checked: true,
      },
      {
        title: 'Pear',
        checked: false,
      },
      {
        title: 'Orange',
        checked: true,
      },
    ]),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultValue = _useState4[0],
    setDefaultValue = _useState4[1];

  // 全选
  function onCheckAllChange(e, value) {
    setcheckAll(value.checked);
    var newDefaultValue = [];
    defaultValue.forEach(function (v) {
      v.checked = !checkAll;
      newDefaultValue.push(v);
    });
    setDefaultValue(newDefaultValue);
  }
  function onChange(list) {
    var value = list.every(function (v) {
      return v.checked;
    });
    setcheckAll(value);
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      CheckboxAll,
      {
        checked: checkAll,
        onChange: onCheckAllChange,
      },
      'Check all',
    ),
    /*#__PURE__*/ React.createElement(CheckboxGroup, {
      disabled: false,
      options: defaultValue,
      onChange: onChange,
    }),
  );
}
