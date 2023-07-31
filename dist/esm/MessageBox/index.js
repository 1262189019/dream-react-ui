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
import Icon from '../Icon/index';
import Button from '../Button';
var MessageBox = /*#__PURE__*/ memo(function (_ref) {
  var messageTitle = _ref.messageTitle,
    messageMain = _ref.messageMain,
    useHTMLString = _ref.useHTMLString,
    handleSubmit = _ref.handleSubmit,
    children = _ref.children;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    flag = _useState2[0],
    setFlag = _useState2[1];
  var style = {
    display: flag ? 'block' : 'none',
  };
  function msgBoxShow() {
    setFlag(true);
  }
  function mshBoxhied() {
    setFlag(false);
  }
  function submit() {
    if (handleSubmit) {
      handleSubmit();
    }
    setFlag(false);
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css.msgbox,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css.switch,
        onClick: function onClick() {
          msgBoxShow();
        },
      },
      children || '显示弹窗',
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css.msgbox_main,
        style: style,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: Css.mack,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: Css.content,
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: Css.title,
            },
            /*#__PURE__*/ React.createElement('span', null, messageTitle || '标题'),
            /*#__PURE__*/ React.createElement(
              'i',
              {
                className: Css.icon,
                onClick: function onClick() {
                  return mshBoxhied();
                },
              },
              /*#__PURE__*/ React.createElement(Icon, {
                name: 'closeguanbi',
              }),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: Css.text,
            },
            messageMain ? (useHTMLString ? messageMain : String(messageMain)) : '内容',
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: Css.submit,
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                type: 'success',
                handleClick: submit,
              },
              '\u786E\u8BA4',
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                type: 'danger',
                handleClick: mshBoxhied,
              },
              '\u53D6\u6D88',
            ),
          ),
        ),
      ),
    ),
  );
});
export default MessageBox;
