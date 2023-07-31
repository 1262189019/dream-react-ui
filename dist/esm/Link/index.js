import React, { memo } from 'react';
import Css from './index.module.less';
var Link = /*#__PURE__*/ memo(function (_ref) {
  var type = _ref.type,
    _ref$underline = _ref.underline,
    underline = _ref$underline === void 0 ? true : _ref$underline,
    disabled = _ref.disabled,
    href = _ref.href,
    children = _ref.children;
  if (
    !type &&
    type !== 'danger' &&
    type !== 'warning' &&
    type !== 'success' &&
    type !== 'text' &&
    type !== 'info'
  ) {
    type = 'text';
  }
  if (!href) {
    href = '/';
  }
  href = disabled ? 'javascript:void(0)' : href;
  var className = [
    Css[type],
    !disabled && underline ? Css['underline'] : '',
    disabled ? Css['disabled'] : '',
  ].join(' ');
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['link'],
    },
    /*#__PURE__*/ React.createElement(
      'a',
      {
        href: href,
        className: className,
      },
      children,
    ),
  );
});
export default Link;
