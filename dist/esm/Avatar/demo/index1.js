import React from 'react';
import Avatar from '..';
export default function AvatarDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
      },
    },
    /*#__PURE__*/ React.createElement(Avatar, {
      circle: true,
      size: 'lg',
      src: 'https://avatars.githubusercontent.com/u/14308293',
    }),
    /*#__PURE__*/ React.createElement(Avatar, {
      size: 'lg',
      src: 'https://avatars.githubusercontent.com/u/10924138',
    }),
  );
}
