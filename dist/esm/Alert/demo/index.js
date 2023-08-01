import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Success',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Info',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'Warning',
    }),
    /*#__PURE__*/ React.createElement(Alert, {
      type: 'error',
    }),
  );
}
