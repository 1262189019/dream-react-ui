import React from 'react';
import Prog from '../index';
var example = function example() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Prog, {
      percentage: 100,
      type: 'circle',
    }),
    /*#__PURE__*/ React.createElement(Prog, {
      percentage: 50,
      type: 'circle',
      color: 'yellow',
    }),
    /*#__PURE__*/ React.createElement(Prog, {
      percentage: 30,
      type: 'circle',
      color: 'green',
    }),
  );
};
export default example;
