import React, { memo } from 'react';
import Css from '../index.module.less';
var CarouselItem = /*#__PURE__*/ memo(function (_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css['carousel_item'], className].join(' '),
      style: style,
    },
    children,
  );
});
export default CarouselItem;
