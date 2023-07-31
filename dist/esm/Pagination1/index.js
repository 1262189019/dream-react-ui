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
import React, { useState, useEffect } from 'react';
import style from './pagination.less';
var Pagination = function Pagination(_ref) {
  var _ref$totalPages = _ref.totalPages,
    totalPages = _ref$totalPages === void 0 ? 10 : _ref$totalPages,
    small = _ref.small,
    _ref$page = _ref.page,
    page = _ref$page === void 0 ? 7 : _ref$page,
    disabled = _ref.disabled,
    _ref$prevtext = _ref.prevtext,
    prevtext = _ref$prevtext === void 0 ? '<' : _ref$prevtext,
    _ref$nexttext = _ref.nexttext,
    nexttext = _ref$nexttext === void 0 ? '>' : _ref$nexttext;
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    startPage = _useState4[0],
    setStartPage = _useState4[1];
  var _useState5 = useState(page),
    _useState6 = _slicedToArray(_useState5, 2),
    endPage = _useState6[0],
    setEndPage = _useState6[1];
  var handlePageClick = function handlePageClick(pageNumber) {
    if (disabled) return;
    setCurrentPage(pageNumber);
  };
  var preclick = function preclick() {
    if (disabled) return;
    var pre = currentPage - 1;
    if (pre <= 1) {
      pre = 1;
    }
    setCurrentPage(pre);
  };
  var nextclick = function nextclick() {
    if (disabled) return;
    var next = currentPage + 1;
    if (next >= totalPages) {
      next = totalPages;
    }
    setCurrentPage(next);
  };

  // 根据当前页和总页数计算显示的起始页码和终止页码
  var calculatePages = function calculatePages() {
    var start = currentPage - 3;
    var end = currentPage + 3;
    if (start <= 1) {
      start = 1;
      end = start + 6;
    }
    if (end >= totalPages) {
      end = totalPages;
      start = end - 6;
      if (start <= 1) {
        start = 1;
      }
    }
    setStartPage(start);
    setEndPage(end);
  };

  // 在组件渲染过程中计算页码范围
  useEffect(
    function () {
      calculatePages();
    },
    [currentPage, totalPages],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: style.main,
    },
    /*#__PURE__*/ React.createElement(
      'ul',
      {
        className: ''
          .concat(style.page, ' ')
          .concat(small ? style.small : '', ' ')
          .concat(disabled ? style.disabled : ''),
      },
      /*#__PURE__*/ React.createElement(
        'li',
        {
          onClick: preclick,
        },
        prevtext,
      ),
      startPage > 1 &&
        /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            'li',
            {
              onClick: function onClick() {
                return handlePageClick(1);
              },
            },
            '1',
          ),
          startPage > 2 && /*#__PURE__*/ React.createElement('li', null, '...'),
        ),
      Array.from(
        {
          length: endPage - startPage + 1,
        },
        function (_, index) {
          return /*#__PURE__*/ React.createElement(
            'li',
            {
              key: startPage + index,
              className: currentPage === startPage + index ? style.active : '',
              onClick: function onClick() {
                return handlePageClick(startPage + index);
              },
            },
            startPage + index,
          );
        },
      ),
      endPage < totalPages &&
        /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          endPage < totalPages - 1 && /*#__PURE__*/ React.createElement('li', null, '...'),
          /*#__PURE__*/ React.createElement(
            'li',
            {
              onClick: function onClick() {
                return handlePageClick(totalPages);
              },
            },
            totalPages,
          ),
        ),
      /*#__PURE__*/ React.createElement(
        'li',
        {
          onClick: nextclick,
        },
        nexttext,
      ),
    ),
  );
};
export default Pagination;
