import React from 'react';
import Switch from '../index';
export default function SwitchDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    /*#__PURE__*/ React.createElement(Switch, null),
    /*#__PURE__*/ React.createElement(Switch, {
      value: true,
    }),
  );
}
