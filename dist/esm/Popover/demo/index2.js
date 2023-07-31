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
        placement: 'top',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'hover'),
    ),
    /*#__PURE__*/ React.createElement(
      Popover,
      {
        placement: 'rigth',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'hover'),
    ),
    /*#__PURE__*/ React.createElement(
      Popover,
      {
        placement: 'left',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'hover'),
    ),
    /*#__PURE__*/ React.createElement(
      Popover,
      {
        placement: 'bottom',
      },
      /*#__PURE__*/ React.createElement(Button, null, 'hover'),
    ),
  );
}
