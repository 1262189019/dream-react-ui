import React, { useMemo, memo } from 'react';
import Css from './index.module.less';
var Avatar = /*#__PURE__*/ memo(function (_ref) {
  var children = _ref.children,
    circle = _ref.circle,
    size = _ref.size,
    sizes = _ref.sizes,
    src = _ref.src,
    style = _ref.style;
  var AvatarStyle = useMemo(
    function () {
      if (!size && size !== 'lg' && size !== 'md' && size !== 'sm' && size !== 'xs') {
        return 'md';
      }
      return size;
    },
    [size, sizes],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css[AvatarStyle], Css['avatar']].join(' '),
    },
    /*#__PURE__*/ React.createElement('img', {
      src: src,
      className: circle ? Css['circle'] : '',
      style: style,
      alt: '',
    }),
    /*#__PURE__*/ React.createElement('p', null, children),
  );
});
export default Avatar;
