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
import React, { useMemo, memo, useEffect, useState, useRef } from 'react';
import Css from './index.module.less';
import Icon from '../Icon';
var Pagination = /*#__PURE__*/ memo(function (_ref) {
  var defaultCurrent = _ref.defaultCurrent,
    defaultPageSize = _ref.defaultPageSize,
    total = _ref.total,
    pagelength = _ref.pagelength,
    handleClick = _ref.handleClick,
    go = _ref.go,
    showSumPage = _ref.showSumPage;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    num = _useState2[0],
    setNum = _useState2[1];
  var inputValue = useRef(null);
  var uls = useRef(null);
  defaultCurrent = defaultCurrent ? defaultCurrent : 0;
  go = go ? go : false;
  showSumPage = showSumPage ? showSumPage : false;
  var page = pagelength ? pagelength : 5;
  var pagesize = defaultPageSize ? defaultPageSize : 10;
  // 总页面数
  var pageSum = useMemo(
    function () {
      return Math.ceil(total / pagesize);
    },
    [total],
  );
  // 响应式
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    indexPage = _useState4[0],
    setIndex = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    arr = _useState6[0],
    setArr = _useState6[1];
  // 显示数
  var list = function list() {
    var arr = [];
    // console.log(page);
    for (var i = 1; i <= page; i++) {
      arr.push(i + num);
    }
    return arr;
  };

  // 改变颜色
  function select(index) {
    changeColor(index);
  }
  function changeColor(index) {
    if (uls.current != null) {
      if (uls.current.children != null) {
        var lis = uls.current.children;
        Array.from(lis).forEach(function (el, ind) {
          if (ind == index) {
            el.className = Css['selected1'];
          } else {
            el.className = '';
          }
        });
        return handleClick
          ? handleClick({
              value: index + num + 1,
            })
          : null;
      }
    }
  }

  // 当前改变颜色的li
  function ind() {
    var lis = uls.current.children;
    var ind = null;
    lis.forEach(function (el, index) {
      if (el.className == Css['selected1']) {
        ind = index;
      }
    });
    return ind;
  }
  // 右
  function rightGo() {
    var sumlist = list().length;
    var index = ind();
    if (index + 1 < Math.ceil(sumlist / 2) || num + sumlist == pageSum) {
      if (index < 4) {
        select(index + 1);
      }
    } else {
      if (num + page < pageSum) {
        var nuwNum = num + 1;
        setIndex(index);
        setNum(function () {
          return nuwNum;
        });
      }
    }
  }
  // 左
  function leftGo() {
    var sumlist = list().length;
    var index = ind();
    if (index + 1 > Math.ceil(sumlist / 2) || num == 0) {
      if (index > 0) {
        select(index - 1);
      }
    } else {
      if (num != 0) {
        setNum(num - 1);
      }
    }
  }
  function blurNum() {
    if (inputValue.current.value.trim() === '') {
      inputValue.current.value = '';
      return;
    }
    if (inputValue.current.value > pageSum || inputValue.current.value < 1) {
      alert('没有该页数');
    } else {
      if (inputValue.current != null && inputValue.current.value <= pageSum) {
        if (Number(inputValue.current.value) + list().length > pageSum) {
          setNum(pageSum - list().length);
          setIndex(Number(inputValue.current.value) - list().length - 1);
        } else {
          if (Number(inputValue.current.value) < list().length) {
            setNum(0);
            setIndex(Number(inputValue.current.value) - 1);
          } else {
            if (indexPage == null) {
              setNum(Number(inputValue.current.value) - 3);
            } else {
              setNum(Number(inputValue.current.value) - 3 - indexPage);
            }
            setIndex(Math.ceil(list().length / 2) - 1);
          }
        }
      }
    }
    inputValue.current.value = null;
  }
  useEffect(function () {
    if (indexPage != null) {
      select(indexPage);
    } else {
      select(defaultCurrent);
    }
  });
  useEffect(
    function () {
      setArr(list);
    },
    [num],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['pagination'],
    },
    /*#__PURE__*/ React.createElement(
      'button',
      {
        onClick: function onClick() {
          return leftGo();
        },
      },
      /*#__PURE__*/ React.createElement(Icon, {
        name: 'arrow-leftdanjiantou-zuo',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'p',
      {
        style: {
          display: num == 0 ? 'none' : 'block',
        },
      },
      '\xB7\xB7\xB7',
    ),
    /*#__PURE__*/ React.createElement(
      'ul',
      {
        className: 'listClass',
        ref: uls,
      },
      arr.map(function (item, index) {
        return /*#__PURE__*/ React.createElement(
          'li',
          {
            onClick: function onClick(e) {
              return select(index);
            },
          },
          item,
        );
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'p',
      {
        style: {
          display: num + page >= pageSum ? 'none' : 'block',
        },
      },
      '\xB7\xB7\xB7',
    ),
    /*#__PURE__*/ React.createElement(
      'button',
      {
        onClick: function onClick() {
          return rightGo();
        },
      },
      /*#__PURE__*/ React.createElement(Icon, {
        name: 'arrow-rightjiantou-you2',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: showSumPage ? 'block' : 'none',
        },
      },
      /*#__PURE__*/ React.createElement('p', null, '\u603B\u9875\u6570\uFF1A', pageSum),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css['input'],
        style: {
          opacity: go ? 1 : 0,
        },
      },
      /*#__PURE__*/ React.createElement('p', null, '\u8DF3\u81F3'),
      /*#__PURE__*/ React.createElement('input', {
        className: Css['inp'],
        ref: inputValue,
        type: 'text',
        onBlur: function onBlur() {
          return blurNum();
        },
      }),
      /*#__PURE__*/ React.createElement('p', null, '\u9875'),
    ),
  );
});
export default Pagination;
