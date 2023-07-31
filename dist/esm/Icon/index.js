import React from 'react';
import icons from '../util/IconPath';
var Icon = function Icon(_ref) {
  var name = _ref.name,
    size = _ref.size,
    path = _ref.path,
    className = _ref.className;
  var style = {
    width: '16px',
    height: '16px',
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
  if (path) {
    return /*#__PURE__*/ React.createElement('img', {
      src: path,
      className: className ? className : '',
      style: style,
      alt: 'Icon',
    });
  }
  if (Object.keys(icons).includes(name)) {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      /*#__PURE__*/ React.createElement('img', {
        src: icons[name],
        className: className ? className : '',
        style: style,
        alt: 'Icon',
      }),
    );
  }
  return null;
};
export default Icon;
