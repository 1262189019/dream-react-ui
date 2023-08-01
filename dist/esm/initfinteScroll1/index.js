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
import React, { useState, useEffect, useRef } from 'react';
import './Scroll.module.less';
var InfiniteScroll = function InfiniteScroll(props) {
  var scrollDisabled = props.scrollDisabled,
    scrollDistance = props.scrollDistance,
    frequency = props.frequency;
  var DivScroll = useRef(null);
  var _useState = useState([1, 2, 3, 4, 5]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    flag = _useState4[0],
    setFlag = _useState4[1];
  var handleScroll = function handleScroll() {
    var _DivScroll$current = DivScroll.current,
      scrollTop = _DivScroll$current.scrollTop,
      scrollHeight = _DivScroll$current.scrollHeight,
      clientHeight = _DivScroll$current.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - (scrollDistance ? scrollDistance : 0)) {
      loadMoreData();
    }
  };
  useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var loadMoreData = function loadMoreData() {
    if (frequency === flag || scrollDisabled) {
      return;
    } else {
      var _loop = function _loop(i) {
        setData(function (prevData) {
          return [].concat(_toConsumableArray(prevData), [i]);
        }); // 将新数据添加到已加载数据中
      };
      for (var i = data.length + 1; i <= data.length + 5; i++) {
        _loop(i);
      }
      setFlag(function (prevState) {
        return prevState + 1;
      });
    }
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'ScrollBox',
      style: {
        width: '100%',
        height: '300px',
        overflow: 'auto',
        fontSize: '20px',
        color: 'white',
      },
      onScroll: handleScroll,
      ref: DivScroll,
    },
    data.map(function (item, index) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          key: index,
          style: {
            width: '80%',
            height: '50px',
            margin: '20px auto',
            backgroundColor: 'skyblue',
            textAlign: 'center',
            lineHeight: '50px',
          },
        },
        index,
      );
    }),
    frequency === flag
      ? /*#__PURE__*/ React.createElement(
          'div',
          {
            style: {
              width: '80%',
              height: '50px',
              margin: '20px auto',
              textAlign: 'center',
              lineHeight: '50px',
              fontSize: '12px',
              color: 'black',
            },
          },
          '\u6CA1\u6709\u66F4\u591A\u5185\u5BB9\u4E86',
        )
      : null,
  );
};
export default InfiniteScroll;
