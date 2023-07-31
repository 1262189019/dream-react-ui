function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
import React, { memo } from 'react';
import Css from '../index.module.less';
var CheckboxGroup = /*#__PURE__*/ memo(function (_ref) {
  var grow = _ref.grow,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    className = _ref.className,
    gutter = _ref.gutter,
    children = _ref.children;
  var colStyle = _objectSpread(
    _objectSpread({}, style),
    {},
    {
      width: grow ? (grow <= 10 ? grow * 10 + '%' : 0) : 0,
      margin: '0 0',
    },
  );
  if (gutter) {
    if (typeof gutter === 'string') {
      if (gutter.includes('%')) {
        colStyle.margin = '0 '.concat(parseInt(gutter) / 2 + '%');
      } else if (gutter.includes('px')) {
        colStyle.margin = '0 '.concat(parseInt(gutter) / 2 + 'px');
      }
    } else if (gutter * 1) {
      colStyle.margin = '0 '.concat(gutter / 2 + 'px');
    }
  } else {
    colStyle.margin = '0 0';
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css['col'], className ? className : ''].join(' '),
      style: colStyle,
    },
    children,
  );
});
export default CheckboxGroup;
