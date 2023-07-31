import React, { memo } from 'react';
import Css from '../index.module.less';
var TabPane = /*#__PURE__*/ memo(function (_ref) {
  var children = _ref.children,
    className = _ref.className,
    name = _ref.name;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css['tab_pane'], className ? className : ''].join(' '),
    },
    children,
  );
});
export default TabPane;
