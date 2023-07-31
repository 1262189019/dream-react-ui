import React from 'react';
import Progress from '..';
import '../Progress.module.less';
export default function ProgressDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Progress, null),
    /*#__PURE__*/ React.createElement(Progress, {
      percent: 30,
    }),
    /*#__PURE__*/ React.createElement(Progress, {
      percent: 50,
      status: 'fail',
    }),
    /*#__PURE__*/ React.createElement(Progress, {
      percent: 70,
      status: 'active',
    }),
    /*#__PURE__*/ React.createElement(Progress, {
      percent: 100,
      status: 'success',
    }),
  );
}
