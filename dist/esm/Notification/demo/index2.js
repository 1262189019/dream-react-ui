import React from 'react';
import BwNotification from '..';
import Button from '../../Button';
export default function NotificationDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      BwNotification,
      {
        info: '\u7B2C\u4E00\u6B21\u5C1D\u8BD5',
        message: '\u8FD9\u91CC\u662F\u5185\u5BB9\u533A\u57DF',
      },
      /*#__PURE__*/ React.createElement(Button, null, '\u663E\u793A\u901A\u77E5'),
    ),
  );
}
