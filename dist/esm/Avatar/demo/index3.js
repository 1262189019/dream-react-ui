import React from 'react';
import Avatar from '..';
export default function AvatarDemo3() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
      },
    },
    /*#__PURE__*/ React.createElement(Avatar, {
      circle: true,
      src: 'https://xsgames.co/randomusers/assets/avatars/pixel/51.jpg',
    }),
    /*#__PURE__*/ React.createElement(Avatar, {
      src: 'https://avatars.githubusercontent.com/u/9625224',
      alt: '\u56FE\u7247\u8D70\u4E22\u55BD',
    }),
    /*#__PURE__*/ React.createElement(Avatar, {
      src: 'https://avatars.githubusercontent.com/u/2797600',
      circle: true,
    }),
    /*#__PURE__*/ React.createElement(Avatar, {
      src: 'https://avatars.githubusercontent.com/u/2883231?v=4&size=64',
    }),
  );
}
