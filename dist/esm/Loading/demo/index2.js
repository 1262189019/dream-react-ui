import React from 'react';
import Loading from '..';
export default function AvatarDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        height: '150px',
      },
    },
    /*#__PURE__*/ React.createElement(Loading, {
      size: 'sm',
      text: '\u52A0\u8F7D\u4E2D...',
    }),
  );
}
