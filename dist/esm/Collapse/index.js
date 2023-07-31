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
import React, { useState, memo, useRef } from 'react';
import Css from './index.module.less';
import Icon from '../Icon';
var Button = /*#__PURE__*/ memo(function (_ref) {
  var items = _ref.items,
    disabled = _ref.disabled,
    height = _ref.height,
    width = _ref.width,
    onChange = _ref.onChange,
    type = _ref.type;
  if (!type && type !== 'ghost' && type !== 'small' && type !== 'large') {
    type = 'Collapse_one';
  }
  var content = useRef([]);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    num = _useState2[0],
    setNum = _useState2[1];
  var icon = useRef(null);
  function chang(index, data) {
    if (!disabled) {
      var _content$current$inde, _content$current$inde2;
      if (
        ((_content$current$inde = content.current[index]) === null ||
        _content$current$inde === void 0
          ? void 0
          : _content$current$inde.style.height) == ''
      ) {
        icon.current.childNodes[index].childNodes[0].childNodes[2].classList.add(Css['action']);
        setNum(index);
        content.current[index].style.height = height + 'px';
        return onChange ? onChange(data) : null;
      }
      if (
        ((_content$current$inde2 = content.current[index]) === null ||
        _content$current$inde2 === void 0
          ? void 0
          : _content$current$inde2.style.height) ==
        height + 'px'
      ) {
        icon.current.childNodes[index].childNodes[0].childNodes[2].classList.remove(Css['action']);
        content.current[index].style.height = '';
      }
    }
    if (disabled) {
      setNum(index);
    }
    return onChange ? onChange(data) : null;
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['Collapse'],
      ref: icon,
    },
    items.map(function (item, index) {
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: Css[type],
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: Css['title'],
              onClick: function onClick() {
                return chang(index, item.key);
              },
              style: {},
            },
            item.label,
            ' ',
            /*#__PURE__*/ React.createElement(Icon, {
              name: 'arrow-rightjiantou-you2',
              className: [Css['icon'], disabled && index === num ? Css['action'] : ''].join(' '),
            }),
            ' ',
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: Css['content'],
              ref: function ref(el) {
                return (content.current[index] = el);
              },
              style: disabled
                ? {
                    height: num == index ? height + 'px' : '0',
                  }
                : undefined,
            },
            item.children,
          ),
        ),
      );
    }),
  );
});
export default Button;
