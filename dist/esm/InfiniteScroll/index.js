function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
import React, { memo, useState } from 'react';
import Css from './index.module.less';
var InfiniteScroll = /*#__PURE__*/ memo(function (_ref) {
  var infiniteScrollDisabled = _ref.infiniteScrollDisabled,
    infiniteScrollDelay = _ref.infiniteScrollDelay,
    infiniteScrollDistance = _ref.infiniteScrollDistance,
    infiniteScrollImmediate = _ref.infiniteScrollImmediate;
  infiniteScrollDisabled = infiniteScrollDisabled ? infiniteScrollDisabled : false;
  infiniteScrollDelay = infiniteScrollDelay ? infiniteScrollDelay : 200;
  infiniteScrollDistance = infiniteScrollDistance ? infiniteScrollDistance : 0;
  infiniteScrollImmediate = infiniteScrollImmediate ? infiniteScrollImmediate : true;

  // 全局
  var n = 1;
  var _useState = useState(getlist(10)),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  function getlist(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(n++);
      console.log(n);
    }
    return arr;
  }
  function scroll(e) {
    var top = e.target.scrollTop;
    var height = e.target.offsetHeight;
    var heightSum = e.target.children[0].offsetHeight;
    if (top + height >= heightSum - infiniteScrollDistance) {
      if (infiniteScrollImmediate) {
        var newArr = getlist(2);
        var arr = [].concat(_toConsumableArray(list), _toConsumableArray(newArr));
        setList(arr);
      } else {
        setTimeout(function () {
          var newArr = getlist(2);
          var arr = [].concat(_toConsumableArray(list), _toConsumableArray(newArr));
          setList(arr);
        }, infiniteScrollDelay);
      }
    }
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['infiniteScroll'],
      onScroll: function onScroll(e) {
        return scroll(e);
      },
    },
    /*#__PURE__*/ React.createElement(
      'ul',
      null,
      list.map(function (item, index) {
        return /*#__PURE__*/ React.createElement('li', null, '\u6D4B\u8BD5', index + 1);
      }),
    ),
  );
});
export default InfiniteScroll;
