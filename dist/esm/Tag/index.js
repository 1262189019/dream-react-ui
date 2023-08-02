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
import './Tab.module.less';
import Icon from '../Icon';
var Tab = function Tab(props) {
  var closable = props.closable,
    tags = props.tags,
    compile = props.compile;
  var _useState = useState(tags ? tags : []),
    _useState2 = _slicedToArray(_useState, 2),
    tabs = _useState2[0],
    setTabs = _useState2[1];
  var handleClick = function handleClick(e, id) {
    e.target.parentNode.parentNode.classList.add('rotate');
    setTimeout(function () {
      var newTabs = tabs.filter(function (item) {
        return item.id !== id;
      });
      setTabs(newTabs);
    }, 200);
  };
  var _useState3 = useState(6),
    _useState4 = _slicedToArray(_useState3, 2),
    Timer = _useState4[0],
    setTimer = _useState4[1];
  var InputChange = function InputChange(e) {
    if (e.target.value.trim() !== '') {
      var date = new Date();
      setTimer(Number(date));
      var data = {
        id: Timer,
        type: 'Tab1',
        content: ''.concat(e.target.value),
      };
      tabs.push(data);
      e.target.value = '';
    }
    e.target.classList.remove('action');
  };
  var DownEnter = function DownEnter(e) {
    if (e.key === 'Enter') {
      var date = new Date();
      setTimer(Number(date));
      var data = {
        id: Timer,
        type: 'Tab1',
        content: ''.concat(e.target.value),
      };
      tabs.push(data);
      e.target.value = '';
    }
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'TabBox',
    },
    tabs.map(function (item) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          key: item.id,
          className: item.type,
          style: {
            transition: 'all .3s',
          },
        },
        /*#__PURE__*/ React.createElement(
          'p',
          {
            style: {
              margin: '0 10px',
            },
          },
          item.content,
        ),
        closable
          ? /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  margin: '0 10px',
                  fontSize: '15px',
                  cursor: 'pointer',
                },
                onClick: function onClick(e) {
                  return handleClick(e, item.id);
                },
              },
              ' ',
              /*#__PURE__*/ React.createElement(Icon, {
                name: 'closeguanbi',
                size: 12,
              }),
              ' ',
            )
          : null,
      );
    }),
    compile
      ? /*#__PURE__*/ React.createElement('input', {
          className: 'inputText',
          type: 'text',
          onFocus: function onFocus(e) {
            e.target.classList.add('action');
          },
          placeholder: 'new tab',
          onBlur: function onBlur(e) {
            return InputChange(e);
          },
          onKeyDown: function onKeyDown(e) {
            return DownEnter(e);
          },
        })
      : null,
  );
};
export default Tab;
