import React from 'react';
import Menu from '..';
export default function index1() {
  var data = [
    {
      icon: 'CPU',
      // 图标
      title: '导航一',
      children: [
        {
          title: '选项1',
        },
        {
          title: '选项2',
        },
        {
          title: '选项3',
        },
        {
          title: '选项4',
          children: [
            {
              title: '选项1',
            },
          ],
        },
      ],
    },
    {
      icon: 'CPU',
      // 图标
      title: '导航二',
    },
    {
      icon: 'CPU',
      // 图标
      title: '导航三',
      disable: true,
    },
    {
      icon: 'CPU',
      // 图标
      title: '导航四',
    },
  ];
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Menu, {
      data: data,
      menuWidth: '200px',
    }),
  );
}
