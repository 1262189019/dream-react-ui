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
        value: '\u9F20\u6807\u60AC\u6D6E',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(Dropdown, {
        option: options,
        trigger: 'click',
        value: '\u9F20\u6807\u70B9\u51FB',
      }),
    ),
  );
}
export default App;
