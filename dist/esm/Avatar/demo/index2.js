import React from 'react';
import Avatar from '..';
export default function AvatarDemo2() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
      },
    },
    /*#__PURE__*/ React.createElement(
      Avatar,
      {
        style: {
          background: 'grey',
        },
        circle: true,
      },
      'HG',
    ),
    /*#__PURE__*/ React.createElement(
      Avatar,
      {
        style: {
          background: 'black',
        },
      },
      'ka',
    ),
    /*#__PURE__*/ React.createElement(
      Avatar,
      {
        circle: true,
        style: {
          background: '#ffc83d',
        },
      },
      'ka',
    ),
    /*#__PURE__*/ React.createElement(
      Avatar,
      {
        style: {
          background: '#93505b',
        },
      },
      'YYD',
    ),
  );
}
