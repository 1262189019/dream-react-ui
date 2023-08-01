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
import React, { useState, useMemo, useRef } from 'react';
import './Alert.module.less';
var Alert = function Alert(props) {
  var type = props.type,
    title = props.title,
    closable = props.closable,
    center = props.center,
    closeText = props.closeText,
    LimeGreen = props.LimeGreen,
    CoolGray = props.CoolGray,
    Goldenrod = props.Goldenrod,
    Coral = props.Coral;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    falg = _useState2[0],
    setFlag = _useState2[1];
  var backgroundColor = {
    LimeGreen: 'limegreen',
    CoolGray: 'grey',
    Goldenrod: 'goldenrod',
    Coral: 'coral',
  };
  var typeRef = useRef();
  var handler = function handler() {
    setFlag(true);
  };
  var AlertStyle = useMemo(
    function () {
      if (!type && type !== 'Success' && type !== 'Info' && type !== 'error') {
        return 'Success';
      }
      return type;
    },
    [type],
  );
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    falg
      ? null
      : /*#__PURE__*/ React.createElement(
          'div',
          {
            className: AlertStyle,
            style: {
              margin: '20px 0',
              backgroundColor: LimeGreen
                ? backgroundColor.LimeGreen
                : '' || CoolGray
                ? backgroundColor.CoolGray
                : '' || Goldenrod
                ? backgroundColor.Goldenrod
                : '' || Coral
                ? backgroundColor.Goldenrod
                : '',
              color: LimeGreen || CoolGray || Goldenrod || Coral ? 'white' : 'gray',
            },
          },
          /*#__PURE__*/ React.createElement(
            'p',
            {
              className: 'title',
              style: {
                margin: center ? '0 auto' : '',
              },
            },
            title ? title : '这是一个提示文案',
            ' ',
          ),
          closable
            ? null
            : /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: 'logo',
                  onClick: handler,
                },
                ' ',
                closeText ? closeText : 'x',
                ' ',
              ),
        ),
  );
};
export default Alert;
