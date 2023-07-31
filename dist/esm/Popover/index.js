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
import React, { memo, useState, useRef, useEffect } from 'react';
import Css from './index.module.less';
var Input = /*#__PURE__*/ memo(function (_ref) {
  var title = _ref.title,
    content = _ref.content,
    width = _ref.width,
    children = _ref.children,
    trigger = _ref.trigger,
    placement = _ref.placement;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    style = _useState4[0],
    setStyle = _useState4[1];
  var popover = useRef(null);
  if (trigger !== 'click' && trigger !== 'focus' && trigger !== 'hover') {
    trigger = 'hover';
  }
  useEffect(function () {
    console.log(popover.current.clientWidth / 2 + 'px');
    if (placement === 'left') {
      setStyle({
        top: '-50%',
        right: width ? width + 'px' : 100 + 'px',
        width: width ? width + 'px' : '100px',
      });
    } else if (placement === 'rigth') {
      setStyle({
        top: '-50%',
        left: width ? width + 'px' : 100 + 'px',
        width: width ? width + 'px' : '100px',
      });
    } else if (placement === 'top') {
      setStyle({
        bottom: popover.current.clientHeight + 'px',
        left: 0 + 'px',
        width: width ? width + 'px' : '100px',
      });
    } else {
      setStyle({
        top: popover.current.clientHeight + 'px',
        left: 0 + 'px',
        width: width ? width + 'px' : '100px',
      });
    }
  }, []);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['popover'],
      onClick: function onClick() {
        trigger === 'click' ? setShow(!show) : null;
      },
      onMouseDown: function onMouseDown() {
        trigger === 'focus' ? setShow(true) : null;
      },
      onMouseUp: function onMouseUp() {
        trigger === 'focus' ? setShow(false) : null;
      },
      onMouseMove: function onMouseMove() {
        trigger === 'hover' ? setShow(true) : null;
      },
      onMouseOut: function onMouseOut() {
        trigger === 'hover' ? setShow(false) : null;
      },
      ref: popover,
    },
    children ? children : '',
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: [Css['popover_main'], show ? Css['show'] : ''].join(' '),
        style: style,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: Css['title'],
        },
        title ? title : '标题',
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: Css['content'],
        },
        content ? content : '这是一段内容',
      ),
    ),
  );
});
export default Input;
