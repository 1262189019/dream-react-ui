import React, { memo, useMemo } from 'react';
import Css from './index.module.less';
var Loading = /*#__PURE__*/ memo(function (props) {
  var size = props.size,
    text = props.text,
    center = props.center,
    backColor = props.backColor;
  var LoadingStyle = useMemo(
    function () {
      if (!size && size !== 'lg' && size !== 'md' && size !== 'sm' && size !== 'xs') {
        return 'md';
      }
      return size;
    },
    [size],
  );
  var Center = useMemo(
    function () {
      if (!center) {
        return '';
      }
      return 'center ';
    },
    [center],
  );
  var bgColor = useMemo(
    function () {
      var Color = {
        background: '',
      };
      if (backColor) {
        Color.background = backColor;
      }
      return Color;
    },
    [center],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: [Css[LoadingStyle], Css['default']].join(' '),
      style: bgColor,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: [Css[Center], Css['el']].join(' '),
      },
      /*#__PURE__*/ React.createElement('span', {
        className: Css['loader'],
      }),
      /*#__PURE__*/ React.createElement('p', null, text),
    ),
  );
});
export default Loading;
