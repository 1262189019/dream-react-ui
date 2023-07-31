import React, { memo } from 'react';
import Css from './index.module.less';
var Card = /*#__PURE__*/ memo(function (_ref) {
  var title = _ref.title,
    extra = _ref.extra,
    bodyStyle = _ref.bodyStyle,
    shadow = _ref.shadow,
    width = _ref.width,
    height = _ref.height,
    border = _ref.border,
    children = _ref.children;
  shadow = shadow ? shadow : 'always';
  title = title ? title : null;
  extra = extra ? extra : null;
  var style = {
    width: '300px',
    border: '1px solid #b1b3b8',
  };
  if (width) {
    style.width = width;
  }
  if (height) {
    style.height = height;
  }
  if (border) {
    style.border = border;
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['Card'],
      style: style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css[shadow],
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: Css['header'],
          style: {
            opacity: title == null && extra == null ? 0 : 1,
          },
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: Css['left'],
          },
          /*#__PURE__*/ React.createElement('p', null, title),
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: Css['right'],
          },
          extra,
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: bodyStyle,
        },
        children,
      ),
    ),
  );
});
export default Card;
