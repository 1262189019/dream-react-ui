import React, { memo } from 'react';
import Css from './index.module.less';
var Divider = /*#__PURE__*/ memo(function (_ref) {
  var title = _ref.title,
    direction = _ref.direction,
    contentPosition = _ref.contentPosition;
  title = title ? title : null;
  direction = direction ? direction : 'horizontal';
  contentPosition = contentPosition ? contentPosition : 'center';
  var leftNum = null;
  var rightNum = null;
  if (contentPosition == 'left') {
    leftNum = 20;
    rightNum = 80;
  }
  if (contentPosition == 'right') {
    leftNum = 80;
    rightNum = 20;
  }
  if (contentPosition == 'center') {
    leftNum = 50;
    rightNum = 50;
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['divider'],
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: direction == 'horizontal' ? 'flex' : 'none',
        },
        className: Css['horizontal'],
      },
      /*#__PURE__*/ React.createElement('hr', {
        style: {
          width: leftNum + '%',
        },
        color: '#b1b3b8',
      }),
      /*#__PURE__*/ React.createElement(
        'p',
        {
          style: {
            display: title ? 'block' : 'none',
          },
        },
        title,
      ),
      /*#__PURE__*/ React.createElement('hr', {
        style: {
          width: leftNum + '%',
        },
        color: '#b1b3b8',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: direction == 'vertical' ? 'inline-block' : 'none',
        },
        className: Css['vertical'],
      },
      /*#__PURE__*/ React.createElement('span', null, '|'),
    ),
  );
});
export default Divider;
