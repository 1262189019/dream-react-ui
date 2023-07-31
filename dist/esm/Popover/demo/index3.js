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
        title: /*#__PURE__*/ React.createElement('h5', null, '\u81EA\u5B9A\u4E49\u6807\u9898'),
        content: /*#__PURE__*/ React.createElement(
          'div',
          {
            style: {
              textAlign: 'center',
            },
          },
          /*#__PURE__*/ React.createElement('h3', null, '\u786E\u5B9A\u5220\u9664\u5417'),
          /*#__PURE__*/ React.createElement(
            Button,
            {
              type: 'text',
            },
            '\u53D6\u6D88',
          ),
          /*#__PURE__*/ React.createElement(Button, null, '\u786E\u5B9A'),
        ),
        width: 300,
      },
      /*#__PURE__*/ React.createElement(Button, null, 'hover'),
    ),
  );
}
