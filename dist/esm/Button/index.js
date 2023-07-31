import React, { memo } from 'react';
import Css from './index.module.less';
var Button = /*#__PURE__*/ memo(function (_ref) {
  var type = _ref.type,
    children = _ref.children,
    width = _ref.width,
    height = _ref.height,
    radius = _ref.radius,
    handleClick = _ref.handleClick,
    disabled = _ref.disabled;
  var style = {
    width: '',
    height: '',
    borderRadius: '',
  };
  if (
    !type &&
    type !== 'danger' &&
    type !== 'warning' &&
    type !== 'success' &&
    type !== 'text' &&
    type !== 'info'
  ) {
    type = 'primary';
  }
  if (width) {
    if (typeof width === 'string') {
      if (width.includes('%') || width.includes('px')) {
        style.width = width;
      }
    } else if (width * 1) {
      style.width = width + 'px';
    }
  } else {
    style.width = '100px';
  }
  if (height) {
    if (typeof height === 'string') {
      if (height.includes('%') || height.includes('px')) {
        style.height = height;
      }
    } else if (height * 1) {
      style.height = height + 'px';
    }
  } else {
    style.height = '45px';
  }
  if (radius) {
    if (typeof radius === 'string') {
      if (radius.includes('%') || radius.includes('px')) {
        style.borderRadius = radius;
      }
    } else if (radius * 1) {
      style.borderRadius = radius + 'px';
    }
  }
  var className = [Css[type], disabled ? Css['disabled'] : ''].join(' ');
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css.button,
    },
    /*#__PURE__*/ React.createElement(
      'button',
      {
        style: style,
        className: className,
        onClick: !disabled
          ? function () {
              handleClick ? handleClick() : null;
            }
          : function () {},
      },
      /*#__PURE__*/ React.createElement('span', null, children ? children : '按钮'),
    ),
  );
});
export default Button;
