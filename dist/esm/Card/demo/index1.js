import React from 'react';
import Card from '..';
import Button from '../../Button';
export default function index1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      Card,
      {
        title: '卡片名称',
        shadow: 'hover',
        extra: /*#__PURE__*/ React.createElement(
          Button,
          {
            type: 'text',
          },
          '\u64CD\u4F5C\u6309\u94AE',
        ),
        bodyStyle: {
          padding: '12px',
        },
      },
      /*#__PURE__*/ React.createElement('p', null, '\u5217\u8868\u5185\u5BB91'),
      /*#__PURE__*/ React.createElement('p', null, '\u5217\u8868\u5185\u5BB92'),
      /*#__PURE__*/ React.createElement('p', null, '\u5217\u8868\u5185\u5BB93'),
      /*#__PURE__*/ React.createElement('p', null, '\u5217\u8868\u5185\u5BB94'),
    ),
  );
}
