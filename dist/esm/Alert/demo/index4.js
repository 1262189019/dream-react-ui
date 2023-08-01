import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Success',
      closable: true,
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Info',
      closeText: '\u77E5\u9053\u4E86',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Warning',
    }),
  );
}
