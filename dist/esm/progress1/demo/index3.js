import React from 'react';
import Prog from '../index';
var example = function example() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Prog, {
      percentage: 100,
    }),
    /*#__PURE__*/ React.createElement(Prog, {
      percentage: 80,
      strokeheight: 10,
      color: 'green',
    }),
    /*#__PURE__*/ React.createElement(Prog, {
      percentage: 70,
      color: 'yellow',
      strokeheight: 14,
    }),
  );
};
export default example;
