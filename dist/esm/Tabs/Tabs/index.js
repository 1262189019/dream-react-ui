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
import Css from '../index.module.less';
var Tabs = /*#__PURE__*/ memo(function (_ref) {
  var type = _ref.type,
    className = _ref.className,
    value = _ref.value,
    handleClick = _ref.handleClick,
    children = _ref.children;
  var _useState = useState(children[0].props.name),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var tabs_main = useRef(null);
  var border_bottom = useRef(null);
  var navs = useRef(null);
  children = Array.isArray(children) ? children : [children];
  if (type !== 'card' && type !== 'border_card') {
    type = 'text';
  }
  var handleChange = function handleChange(e, value) {
    border_bottom.current.style.width = e.target.parentNode.clientWidth + 'px';
    border_bottom.current.style.left = e.target.offsetLeft + 'px';
    setVal(value);
    children.forEach(function (item, index) {
      if (item.props.name === value) {
        tabs_main.current.childNodes[index].className = Css['tab_pane'] + ' ' + Css['show'];
      } else {
        tabs_main.current.childNodes[index].className = Css['tab_pane'];
      }
    });
    return handleClick ? handleClick(e, value) : null;
  };
  useEffect(function () {
    tabs_main.current.childNodes[0].className =
      tabs_main.current.childNodes[0].className + ' ' + Css['show'];
    border_bottom.current.style.width = navs.current.childNodes[0]
      ? navs.current.childNodes[0].clientWidth + 'px'
      : '0px';
    if (!value) {
      setVal(children[0].props.name);
    }
  }, []);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [
        Css['tabs'],
        type === 'border_card' ? Css['border'] : '',
        className ? className : '',
      ].join(' '),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: [Css['navs'], Css[type]].join(' '),
        ref: navs,
      },
      children.map(function (item, index) {
        if (item.props.name) {
          return /*#__PURE__*/ React.createElement(
            'div',
            {
              className: [Css['nav_item'], item.props.name === val ? Css['action'] : ''].join(' '),
              onClick: function onClick(e) {
                handleChange(e, item.props.name);
              },
            },
            /*#__PURE__*/ React.createElement('span', null, item.props.name),
          );
        }
      }),
      children[0].props.name
        ? /*#__PURE__*/ React.createElement('div', {
            className: Css['border_bottom'],
            ref: border_bottom,
          })
        : '',
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css['tabs_main'],
        ref: tabs_main,
      },
      children,
    ),
  );
});
export default Tabs;
