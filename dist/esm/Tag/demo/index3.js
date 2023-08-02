import React from 'react';
import Tab from '..';
export default function TabDemo() {
  var list = [
    {
      id: 1,
      type: 'Tab1',
      content: '标签1',
    },
    {
      id: 2,
      type: 'Tab2',
      content: '标签2',
    },
    {
      id: 3,
      type: 'Tab3',
      content: '标签3',
    },
    {
      id: 4,
      type: 'Tab4',
      content: '标签4',
    },
  ];
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Tab, {
      closable: true,
      compile: true,
      tags: list,
    }),
  );
}
