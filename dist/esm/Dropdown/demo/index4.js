import React from 'react';
import Dropdown from '..';
var options = [
  {
    value: 'option1',
    label: 'Option 1',
  },
  {
    value: 'option2',
    label: 'Option 2',
  },
  {
    value: 'option3',
    label: 'Option 3',
  },
];
function App() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(Dropdown, {
        option: options,
        type: 'button',
        size: 'small',
        value: '\u5C0F\u578B',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(Dropdown, {
        option: options,
        type: 'button',
        size: 'medium',
        value: '\u4E2D\u578B',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(Dropdown, {
        option: options,
        type: 'button',
        size: 'large',
        value: '\u5927\u578B',
      }),
    ),
  );
}
export default App;
