import React from 'react';
import Loading from '..';
export default function AvatarDemo() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          height: '100px',
          borderBottom: '1px solid #b1b3b8',
        },
      },
      /*#__PURE__*/ React.createElement(Loading, {
        size: 'xs',
        text: 'xsmall',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          height: '120px',
          borderBottom: '1px solid #b1b3b8',
        },
      },
      /*#__PURE__*/ React.createElement(Loading, {
        size: 'sm',
        text: 'small',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          height: '140px',
          borderBottom: '1px solid #b1b3b8',
        },
      },
      /*#__PURE__*/ React.createElement(Loading, {
        size: 'md',
        text: 'medium',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          height: '160px',
        },
      },
      /*#__PURE__*/ React.createElement(Loading, {
        size: 'lg',
        text: 'large',
      }),
    ),
  );
}
