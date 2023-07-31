import React from 'react';
import Loading from '..';
export default function AvatarDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '200px',
        backgroundColor: '#f2f2f5',
      },
    },
    /*#__PURE__*/ React.createElement(Loading, {
      backColor: 'rgba(0,0,0,.2)',
      center: true,
      size: 'sm',
      text: '\u52A0\u8F7D\u4E2D...',
    }),
  );
}
