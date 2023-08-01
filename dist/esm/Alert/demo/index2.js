import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Success',
      LimeGreen: true,
      title: '\u6210\u529F\u63D0\u793A\u7684\u6587\u6848',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Info',
      Goldenrod: true,
      title: '\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Warning',
      CoolGray: true,
      title: '\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'error',
      Coral: true,
      title: '\u5931\u8D25\u63D0\u793A\u7684\u6587\u6848',
    }),
  );
}
