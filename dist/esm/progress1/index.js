import React from 'react';
import style from './progress.less';
var Prog = function Prog(_ref) {
  var _ref$percentage = _ref.percentage,
    percentage = _ref$percentage === void 0 ? 0 : _ref$percentage,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '' : _ref$color,
    _ref$strokeheight = _ref.strokeheight,
    strokeheight = _ref$strokeheight === void 0 ? 6 : _ref$strokeheight,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'line' : _ref$type,
    _ref$inside = _ref.inside,
    inside = _ref$inside === void 0 ? false : _ref$inside;
  var sty = {
    width: ''.concat(percentage, '%'),
    backgroundColor: color,
    height: ''.concat(strokeheight, 'px'),
    lineHeight: ''.concat(strokeheight, 'px'),
  };
  var progressContent = null;
  if (type === 'line') {
    progressContent = /*#__PURE__*/ React.createElement(
      'div',
      {
        className: style.bar,
        style: sty,
      },
      inside &&
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: style.inside,
          },
          percentage,
          '%',
        ),
    );
  } else if (type === 'circle') {
    progressContent = /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(
        'svg',
        {
          viewBox: '0 0 36 36',
          className: style.circle,
          style: {
            strokeDasharray: ''.concat(percentage, 'px 100px'),
          },
        },
        /*#__PURE__*/ React.createElement('path', {
          className: style.bgCircle,
          d: 'M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831',
          stroke: color ? color : 'rgb(32, 160, 255)',
        }),
        /*#__PURE__*/ React.createElement('path', {
          className: style.fillCircle,
          strokeDasharray: ''.concat(percentage, ' 100'),
          d: 'M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831',
        }),
      ),
      inside &&
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: style.inside,
          },
          percentage,
          '%',
        ),
    );
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: type === 'circle' ? style.circleprogress : style.progress,
      style: {
        height: strokeheight,
      },
    },
    progressContent,
  );
};
export default Prog;
