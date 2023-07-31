import React from 'react';
import RadioGroupButton from '../RadioGroupButton';
export default function index4() {
  var radio = 'radio4';
  var radio1 = 'radio5';
  var radio2 = 'radio6';
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: 'flex',
        },
      },
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        defaultValue: '春',
        size: 'medium',
        value: radio1,
        label: '春',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'medium',
        value: radio1,
        label: '夏',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'medium',
        value: radio1,
        label: '秋',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'medium',
        value: radio1,
        label: '冬',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          marginTop: '10px',
        },
      },
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'small',
        value: radio,
        label: '上海',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        defaultValue: '北京',
        size: 'small',
        value: radio,
        label: '北京',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'small',
        value: radio,
        label: '广州',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'small',
        value: radio,
        label: '深圳',
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          marginTop: '10px',
        },
      },
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'mini',
        value: radio2,
        label: '喜羊羊',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'mini',
        value: radio2,
        label: '美羊羊',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        size: 'mini',
        value: radio2,
        label: '懒羊羊',
      }),
      /*#__PURE__*/ React.createElement(RadioGroupButton, {
        defaultValue: '灰太狼',
        size: 'mini',
        value: radio2,
        label: '灰太狼',
      }),
    ),
  );
}
