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
import React, { memo, useEffect, useState, useRef } from 'react';
import Css from '../index.module.less';
import Icon from '../../Icon';
var Carousel = /*#__PURE__*/ memo(function (_ref) {
  var height = _ref.height,
    initial_index = _ref.initial_index,
    trigger = _ref.trigger,
    autoplay = _ref.autoplay,
    interval = _ref.interval,
    loop = _ref.loop,
    change = _ref.change,
    children = _ref.children;
  var _useState = useState(initial_index ? initial_index : 0),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var carouselMainStyle = {
    width: 100 * (loop ? children.length + 1 : children.length) + '%',
    height: height ? height : '200px',
    left: index * -100 + '%',
  };
  var carouselMain = useRef(null);
  interval = Number(interval) ? interval : 3000;
  autoplay = autoplay ? autoplay : true;
  loop = loop ? loop : true;
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    timer = _useState4[0],
    setTimer = _useState4[1];
  if (trigger !== 'hover') {
    trigger = 'click';
  }
  useEffect(function () {
    if (autoplay) {
      clearInterval(timer);
      setTimer(null);
      var time = setInterval(function () {
        nextClick();
      }, interval);
      setTimer(time);
    }
    return function () {
      if (autoplay) {
        clearInterval(timer);
        setTimer(null);
      }
    };
  }, []);
  var preClick = function preClick() {
    var num = -parseInt(carouselMain.current.style.left) / 100;
    if (num > 0) {
      setIndex(function (num) {
        return num - 1;
      });
      change
        ? change({
            index: num,
          })
        : '';
    } else {
      carouselMain.current.style.transition = 'none';
      setIndex(children.length);
      setTimeout(function () {
        carouselMain.current.style.transition = 'all .3s';
        setIndex(children.length - 1);
        change
          ? change({
              index: num,
            })
          : '';
      }, 10);
    }
  };
  var nextClick = function nextClick() {
    if (carouselMain.current) {
      var num = -parseInt(carouselMain.current.style.left) / 100;
      if (num < children.length - 1) {
        carouselMain.current.style.transition = 'all .3s';
        setIndex(function (num) {
          return num + 1;
        });
        change
          ? change({
              index: num,
            })
          : '';
      } else {
        setIndex(function (num) {
          return num + 1;
        });
        setTimeout(function () {
          carouselMain.current.style.transition = 'none';
          setIndex(0);
          change
            ? change({
                index: num,
              })
            : '';
        }, 300);
      }
    } else {
      clearInterval(timer);
      timer = null;
    }
  };
  var MouseOver = function MouseOver() {
    autoplay ? clearInterval(timer) : '';
    setTimer(null);
  };
  var MouseOut = function MouseOut() {
    if (autoplay) {
      clearInterval(timer);
      setTimer(null);
      var time = setInterval(
        function () {
          nextClick();
        },
        interval ? interval : 3000,
      );
      setTimer(time);
    }
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css['carousel'], Css[trigger]].join(' '),
      onMouseOver: function onMouseOver() {
        MouseOver();
      },
      onMouseOut: function onMouseOut() {
        MouseOut();
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: [Css['carousel_main']].join(' '),
        style: carouselMainStyle,
        ref: carouselMain,
      },
      children.map(function (item) {
        return item;
      }),
      loop ? children[0] : '',
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css['pre'],
        onClick: function onClick() {
          preClick();
        },
      },
      /*#__PURE__*/ React.createElement(Icon, {
        name: 'arrow-leftdanjiantou-zuo',
        size: 18,
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css['next'],
        onClick: function onClick() {
          nextClick();
        },
      },
      /*#__PURE__*/ React.createElement(Icon, {
        name: 'arrow-rightjiantou-you2',
        size: 18,
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'ul',
      {
        className: Css['carousel_indicators'],
      },
      children.map(function (item, ind) {
        return /*#__PURE__*/ React.createElement('li', {
          className: ind === (index === children.length ? 0 : index) ? Css['action'] : '',
          onClick: function onClick() {
            setIndex(ind);
          },
          onMouseOver: function onMouseOver() {},
        });
      }),
    ),
  );
});
export default Carousel;
