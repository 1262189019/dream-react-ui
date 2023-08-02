import React from 'react';
import Css from './index.module.less';
import './icons';
var Icon = function Icon(_ref) {
  var name = _ref.name,
    size = _ref.size,
    color = _ref.color,
    className = _ref.className;
  var style = {
    width: '16px',
    height: '16px',
    filter: color ? 'brightness(0) invert(1)' : '',
  };
  if (size) {
    if (typeof size === 'string') {
      if (size.includes('%') || size.includes('px')) {
        style.width = size;
        style.height = size;
      }
    } else if (size * 1) {
      style.width = size + 'px';
      style.height = size + 'px';
    }
  }
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      'svg',
      {
        className: [Css['icon'], className].join(' '),
        'aria-hidden': 'true',
        style: style,
      },
      /*#__PURE__*/ React.createElement('use', {
        xlinkHref: '#icon-' + name,
      }),
    ),
  );
};
export default Icon;
