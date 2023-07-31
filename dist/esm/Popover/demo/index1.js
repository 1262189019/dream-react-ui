import React from 'react';
import Popover from '..';
import Button from '../../Button';
export default function () {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    /*#__PURE__*/ React.createElement(
      Popover,
      {
        trigger: 'hover',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'hover'),
    ),
    /*#__PURE__*/ React.createElement(
      Popover,
      {
        trigger: 'click',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'click'),
    ),
    /*#__PURE__*/ React.createElement(
      Popover,
      {
        trigger: 'focus',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'focus'),
    ),
  );
}
