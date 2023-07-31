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
        requireInteraction: true,
        icon: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico',
        info: '\u7B2C\u4E00\u6B21\u5C1D\u8BD5',
        message: 'kukkukuk',
      },
      /*#__PURE__*/ React.createElement(Button, null, '\u663E\u793A\u901A\u77E5'),
    ),
  );
}
