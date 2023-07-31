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
      text: '',
    }),
  );
}
