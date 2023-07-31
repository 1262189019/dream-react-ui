import React, { memo } from 'react';
import Css from './index.module.less';
import Icon from '../Icon';
var Backtop = /*#__PURE__*/ memo(function (_ref) {
  var right = _ref.right,
    bottom = _ref.bottom,
    topClick = _ref.topClick,
    children = _ref.children,
    show = _ref.show,
    className = _ref.className;
  var style = {
    right: right ? right : '80px',
    bottom: bottom ? bottom : '200px',
    display: show ? 'block' : 'none',
  };
  function Top() {
    if (topClick) {
      topClick();
    }
    window.scrollTo({
      top: document.body.offsetTop,
      behavior: 'smooth',
    });
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css.backtop, className ? className : ''].join(' '),
      onClick: function onClick() {
        Top();
      },
      style: style,
    },
    children ||
      /*#__PURE__*/ React.createElement(Icon, {
        name: 'arrow-single-updanjiantou-shang',
      }),
  );
});
export default Backtop;
